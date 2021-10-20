import Api from "./Api";


export default {
  register(form) {
    return Api().post("/register", form);
  },


  login(form) {
    return Api().post("/login", form);
  },

  emailVerificationLink(form) {
    return Api().post("/email_verification_link", form);
  },

  forgotPassword(form) {
    return Api().post("/forget_password", form);
  },

  verifyEmail(verification_token) {
    return Api().put("/verify_email/"+ verification_token);
  },
  

  logout() {
    return Api().post("/logout");
  },


  auth() {
    return Api().get("/user");
  },

  //category
  getCategory() {
    return Api().get("/category");
  },

  //state
  getState() {
    return Api().get("/state");
  },
  
  //Organization Details
  saveOrganizationDetail(form) {
    return Api().post("/business/profile/save", form);
  },
  getOrganizationDetail() { // Getting organization details of authenticated user
    return Api().get("/business/profile/org");
  }, 

  getArtisanDetail() { // getting organization details that will be displayed on the index page
    return Api().get("/business/profile");
  }, 
   
  updateOrganizationDetail(form) {
    return Api().post("/business/profile/update/4", form); // remember to edit this
  },

  //Gallery
  saveGallery(form) {
    return Api().post("/gallery/save", form);
  },
  getGallery(id) {
    return Api().get("/gallery/"+ id);
  },  
  updateGallery(form, id) {
    return Api().post("/gallery/update/"+ id, form);
  },
  deleteGallery(id) {
    return Api().delete("/gallery/delete/"+ id);
  },


  //profile
  saveProfile(form) {
    return Api().post("/profile/save", form);
  },
  getProfile(form) {
    return Api().get("/profile", form);
  },

  updateProfile(form) {
    return Api().post("/profile/update", form);
  },


    //location
    getLocations(stateId) {
      return Api().get("/location/"+ stateId);
    },
    saveLocation(form) {
      return Api().post("/location/save", form);
    },
  
    updateLocation(form, id) {
      return Api().put("/location/update/"+ id, form);
    },

    deleteLocation(id) {
      return Api().delete("/location/delete/"+ id);
    },



    

};
