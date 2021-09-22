import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/index.vue";
import Profile from "./pages/Profile.vue";
import Artisan from "./pages/artisan.vue";
import PageNotFound from "./pages/404.vue";
import OrganizationDetail from "./pages/Organizationdetail.vue";
import verifyEmail from "./pages/verifyEmail.vue";
import Gallery from "./pages/Gallery.vue";
import store from './store.js';



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-:name",
    name: "Artisan",
    component: Artisan,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { authOnly: true }
  },

  {
    path: "/email_verification/:id",
    name: "verifyEmail",
    component: verifyEmail,
    meta: { authOnly: false }    
  },

  {
    path: "/organization-detail",
    name: "OrganizationDetail",
    component: OrganizationDetail,
    meta: { authOnly: true }
    
  },

  {
    path: "/gallery/:id",
    name: "Gallery",
    component: Gallery,
  },

  {
    path: "/gallery",
    name: "authGallery",
    component: Gallery,
    meta: { authOnly: true },
  },


   {
    path: "/:pathMatch(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },   

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function isLoggedIn() {
  return localStorage.getItem("auth");
}
 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      store.commit("log_reg_modal", true);
      next({
        path: "/",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route does not requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
