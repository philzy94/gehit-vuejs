<template>
  <div class="">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="w-full md:px-10">
      <nav
        class="flex-row md:px-1 shadow-sm border-b-4 border-r-2 border-l-2 border-gray-200"
      >
        <div class="flex flex-row py-1 justify-between">
          <div class="inset-y-0 left-0 pl-2 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <button
              @click="mobileView"
              class="text-purple-head-color inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-yellow-600 focus:outline-none ring-2 focus:ring-inset ring-yellow-600"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                  -->
              <svg
                class="block h-4 w-4"
                v-if="menushow"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                  -->
              <svg
                class="h-4 w-4"
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/"
              ><img
                class="block h-14 w-auto"
                src="../assets/gehitlogo.jpeg"
                alt="Workflow"
            /></router-link>
          </div>

          <div
            class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <span v-if="!isLogin">
              <button
                @click="openLoginModal"
                class="text-xs ring-yellow-600 text-purple-head-color ring-1 py-1 px-2 mr-1 rounded-md hover:text-white hover:bg-yellow-600"
              >
                <span class="flex">
                  <label>Login</label>
                  <div class="">
                    <i class="fal fa-sign-in-alt"></i>
                  </div>
                </span>
              </button>

              <button
                @click="openRegisterModal"
                class="text-xs ring-yellow-600 text-purple-head-color ring-1 py-1 px-2 mr-1 rounded-md hover:text-white hover:bg-yellow-600"
              >
                <span class="flex">
                  <label>Register</label>
                  <div class="">
                    <i class="fal fa-sign-in-alt"></i>
                  </div>
                </span>
              </button>
            </span>

            <span v-else>
              <div class="w-full pr-0">
                <div class="relative inline-block float-right">
                  <div class="relative text-sm text-black">
                    <button
                      id="userButton"
                      class="flex items-center focus:outline-none mr-3"
                    >
                      <img
                        class="w-8 h-8 rounded-full mr-1"
                        src="../assets/logo.png"
                        alt="Avatar of User"
                      />
                      <span class="hidden text-yellow-600 md:inline-block text-gray"
                        >Hi, User</span
                      >
                      <svg
                        class="pl-2 h-3 fill-current text-yellow-600"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 129 129"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        enable-background="new 0 0 129 129"
                      >
                        <g>
                          <path
                            d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                          />
                        </g>
                      </svg>
                    </button>
                    <div
                      id="userMenu"
                      class="bg-yellow-600 rounded shadow-md absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 visible"
                    >
                      <ul class="list-reset">
                        <li>
                          <a
                            href="#"
                            class="px-4 py-2 block text-white hover:bg-gray-800 no-underline hover:no-underline"
                            >My account</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="px-4 py-2 block text-white hover:bg-gray-800 no-underline hover:no-underline"
                            >Notifications</a
                          >
                        </li>
                        <li><hr class="border-t mx-2 border-white" /></li>
                        <li>
                          <a
                            @click="logout"
                            href="#"
                            class="px-4 py-2 block text-white hover:bg-gray-800 no-underline hover:no-underline"
                            >Logout</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div
          :class="menudisplay"
          class="border-t-2 md:block border-gray-200 md:border-t-0 md:border-white"
        >
          <ul
            class="space-y-1 space-x-0 md:space-y-0 md:space-x-1 md:absolute md:top-0 md:left-36 md:flex md:flex-row"
            id="mobileMenu"
          >
            <li>
              <router-link
                to="/"
                class="inline-block head-hover-md w-full text-purple-head-color px-3 py-4 text-sm font-medium"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/organisation-detail"
                class="inline-block head-hover-md w-full text-purple-head-color px-3 py-4 text-sm font-medium"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                to="/foo"
                class="inline-block head-hover-md w-full text-purple-head-color px-3 py-4 text-sm font-medium"
                >Contact</router-link
              >
            </li>
            <li>
              <router-link
                to="/fooc"
                class="inline-block head-hover-md w-full text-purple-head-color px-3 py-4 text-sm font-medium"
                >Profile</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div v-if="filterResult" class="w-full h-11 border-b-2 px-2 md:px-10 border-gray-300">
      <div class="flex justify-between w-full">
        <div class="mr-2 py-1">
          <button
            @click="toggleFilter"
            class="px-3 h-8 md:hidden placeholder-gray-400 text-gray-700 bg-gray-50 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
          >
            Filter
          </button>
        </div>

        <div>
          <div class="relative flex flex-wrap">
            <input
              type="text"
              placeholder="Search"
              class="px-3 py-3 h-10 placeholder-gray-400 text-gray-700 bg-gray-50 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
            <span
              class="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="retypePwd">
      <!-- Re_Login modal -->
      <div
        class="modal z-10 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70"
        v-if="showModal"
      >
        <!-- modal -->
        <div class="bg-white rounded shadow-lg w-4/5 sm:w-1/3">
          <!-- modal header -->
          <div class="border-b px-4 py-2 flex justify-between items-center">
            <h1 class="font-bold text-yellow-600 text-3xl">Retype Password</h1>
          </div>
          <div class="text-sm text-center font-bold py-1">
            Please enter your password again to contineu
          </div>
          <!-- modal body -->
          <div class="p-3">
            <div class="mb-3">
              <span class="errors" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>

            <div class="mb-3">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password: <span class="errors">*</span>
              </label>
              <input
                class="form-field"
                v-model="signUpForm.password"
                id="password"
                type="password"
                placeholder="******************"
              />
              <span class="errors" v-if="errors.password">
                {{ errors.password[0] }}
              </span>
            </div>
          </div>
          <div class="flex w-ful justify-end items-center w-100 border-t p-3">
            <button
              class="reg-log"
              @click="relogin"
              v-bind:class="{ cursordisable: isLoading }"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Login</span>
              <svg
                v-else
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span v-if="isLoading">Processing</span>
            </button>
          </div>
        </div>
      </div>
      <!-- Re_Login modal end -->
    </div>

    <div v-if="!retypePwd">
      <!-- Login/Regiter modal -->
      <div
        class="modal z-10 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70"
        v-if="showModal"
      >
        <!-- modal -->
        <div class="bg-white rounded shadow-lg w-4/5 sm:w-1/3">
          <!-- modal header -->
          <div class="border-b px-4 py-2 flex justify-between items-center">
            <h1 class="font-bold text-yellow-600 text-3xl">
              {{ register ? "Register" : "Login" }}
            </h1>
            <button class="text-black close-modal" @click="closeModal">&cross;</button>
          </div>
          <div class="text-sm text-center">
            <span class="errors">*</span> means the field must be field
          </div>
          <!-- modal body -->
          <div class="p-3">
            <div class="mb-4" v-if="register">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                Register as: <span class="errors">*</span>
              </label>
              <select v-model="signUpForm.user_type" class="form-field">
                <option value="" selected disabled class="text-grey-darker">
                  --Select--
                </option>
                <option value="Customer">Customer</option>
                <option value="Artisan">Artisan</option>
              </select>
              <span class="errors" v-if="errors.user_type">
                {{ errors.user_type[0] }}
              </span>
            </div>

            <div class="mb-3">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                Email: <span class="errors">*</span>
              </label>
              <input
                class="form-field"
                v-model="signUpForm.email"
                id="email"
                type="email"
                placeholder="example@example.com"
              />
              <span class="errors" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>
            <div class="mb-3">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password: <span class="errors">*</span>
              </label>
              <input
                class="form-field"
                v-model="signUpForm.password"
                id="password"
                type="password"
                placeholder="******************"
              />
              <span
                class="errors"
                v-if="
                  errors.password &&
                  errors.password != 'The password confirmation does not match.'
                "
              >
                {{ errors.password[0] }}
              </span>
            </div>

            <div class="mb-3" v-if="register">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="comfirm">
                Confirm Password: <span class="errors">*</span>
              </label>
              <input
                class="form-field"
                id="comfirm"
                v-model="signUpForm.password_confirmation"
                type="password"
                placeholder="******************"
              />
              <span
                class="errors"
                v-if="
                  errors.password &&
                  errors.password == 'The password confirmation does not match.'
                "
              >
                {{ errors.password[0] }}
              </span>
            </div>
            <div>
              <p class="text-gray-500 text-sm font-bold italic">
                {{ register ? "Already a member? " : "Don't have an account?  " }}
                <button
                  @click="LogRegModal"
                  class="text-xs ring-yellow-600 hover:ring-yellow-600 text-purple-head-color ring-1 py-1 px-2 mr-1 rounded-md hover:text-white hover:bg-yellow-600"
                >
                  {{ register ? "Login" : "Register" }}
                </button>
              </p>
              <div v-if="register" class="inline-block">
                <input class="mr-2" type="checkbox" id="agreement" v-model="agreement" />
                <a
                  class="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-900"
                  href="#"
                  @click="termsOfService"
                >
                  I agree to Gehit Terms and Service
                </a>
              </div>
            </div>

            <div class="flex items-center justify-end">
              <a
                class="inline-block align-baseline font-bold text-sm text-yellow-500 hover:text-yellow-900"
                v-if="login"
                href="#"
                @click="forgotPassword"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div class="flex w-ful justify-end items-center w-100 border-t p-3">
            <button
              class="reg-log"
              @click="signup"
              v-bind:class="{ cursordisable: isLoading }"
              :disabled="isLoading"
              v-if="register && termsAgreement"
            >
              <span v-if="!isLoading">Register</span>
              <svg
                v-else
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span v-if="isLoading">Processing</span>
            </button>

            <button
              class="reg-log"
              @click="signin"
              v-bind:class="{ cursordisable: isLoading }"
              :disabled="isLoading"
              v-if="login"
            >
              <span v-if="!isLoading">Login</span>
              <svg
                v-else
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span v-if="isLoading">Processing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emitter } from "../main.js";
import Http from "../apis/Http";
import Swal from "sweetalert2";
import Toast from "../apis/sweetAlert";

export default {
  name: "Index",

  mounted() {
    this.filter();
  },
  data() {
    return {
      menushow: true,
      menudisplay: "hidden",
      notification: false,
      register: false,
      login: true,
      isLoading: false,
      redirect_path: null,

      filterPage: true,
      agreement: false,

      signUpForm: {
        email: "",
        user_type: "",
        password: "",
        password_confirmation: "",
        //host_domain: window.location.host,
      },

      signInForm: {
        email: "",
        password: "",
      },
      errors: [],
      Token: localStorage.getItem("auth"),
    };
  },

  computed: {
    isLogin() {
      return this.$store.getters.isLoggedIn;
    },

    retypePwd() {
      return this.$store.getters.re_Login;
    },

    showModal() {
      return this.$store.getters.isLogRegModal;
    },

    loginToken() {
      return this.Token;
    },

    filterResult() {
      return this.filterPage;
    },
    termsAgreement() {
      return this.agreement;
    },
  },
  methods: {
    reset_values() {
      this.signUpForm.email = "";
      this.signUpForm.user_type = "";
      this.signUpForm.password = "";
      this.signUpForm.password_confirmation = "";
      this.errors = [];
    },

    signup() {
      this.isLoading = true;
      Http.register(this.signUpForm)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Registration Successful",
          });

          this.reset_values();
          this.LogRegModal();
          this.isLoading = false;
        })
        .catch((error) => {
          this.signUpForm.password = "";
          this.signUpForm.password_confirmation = "";
          this.isLoading = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          } else {
            this.errors = error.response.data.errors;
          }
        });
    },

    signin() {
      this.isLoading = true;
      this.signInForm.email = this.signUpForm.email;
      this.signInForm.password = this.signUpForm.password;

      let redirectURL = window.location.search;
      this.redirect_path = redirectURL.toString().split("=")[1];
      this.$store.commit("log_reg_modal", true);

      Http.login(this.signInForm)
        .then((response) => {
          this.$store.commit("LOGIN", response.data.token);
          localStorage.setItem("auth", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          this.$store.commit("log_reg_modal", false);
          //console.log(JSON.parse(localStorage.getItem("auth")).token);
          this.reset_values();
          this.isLoading = false;

          // checking if there is a redirectet path. if there is, the user will redirected to
          // the path he/she was intend to go before redirecting to login, and if there is not,
          // redirect to dashboard
          if (this.redirect_path) {
            this.$router.push({ path: this.redirect_path });
          } else {
            // this.$router.push({ name: "Dashboard" });
          }
        })
        .catch((error) => {
          this.isLoading = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            this.isLoading = false;
            if (error.response.data.errors.unverifiedEmail) {
              this.$store.commit("log_reg_modal", false);
              Swal.fire({
                icon: "info",
                title: "Unverified Email Address",
                text:
                  "You are yet to verify your email address. Please click on the link that was sent to your email to verify or click on the resend button below to resend the link",
                showCancelButton: true,
                confirmButtonColor: "rgba(217, 119, 6)",
                cancelButtonColor: "#d33",
                confirmButtonText: "Resend Link",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$store.commit("loadSpinner", true);
                  Http.emailVerificationLink(this.signInForm)
                    .then(() => {
                      this.$store.commit("loadSpinner", false);
                      Swal.fire(
                        "Resend",
                        "A new link has been sent to " +
                          this.signInForm.email +
                          ". Please verify",
                        "success"
                      );
                    })
                    .catch(() => {
                      this.$store.commit("loadSpinner", false);
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text:
                          "Something went wrong! Email verification link was not sent",
                        footer: "",
                      });
                    });
                }
              });
            }
          }
        });
    },

    forgotPassword() {
      this.$store.commit("loadSpinner", true);
      Http.forgotPassword(this.signUpForm)
        .then(() => {
          this.$store.commit("loadSpinner", false);
          Swal.fire({
            title: "Reset Password",
            icon: "success",
            confirmButtonColor: "#cc4400",
            confirmButtonText: "OK",
            text:
              "A new password has been sent to your email, you can login using the password",
            footer: "",
          });
        })
        .catch((error) => {
          this.$store.commit("loadSpinner", false);
          console.log(error.response.data.message);
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            Swal.fire({
              icon: "error",
              title: "Email Required",
              text: "Please enter your valid email address in the email field",
              footer: "",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message,
              footer: "",
            });
          }
        });
    },

    relogin() {
      this.isLoading = true;
      this.signInForm.email = JSON.parse(localStorage.getItem("user")).email;
      this.signInForm.password = this.signUpForm.password;

      Http.login(this.signInForm)
        .then((response) => {
          this.$store.commit("LOGIN", response.data.token);
          localStorage.setItem("auth", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          this.$store.commit("log_reg_modal", false);

          this.reset_values();
          this.isLoading = false;

          // checking if there is a redirectet path. if there is, the user will redirected to
          // the path he/she was intend to go before redirecting to login, and if there is not,
          // redirect to dashboard
          /* if(this.redirect_path){
            this.$router.push({ path: this.redirect_path });
          }
          else{
             this.$router.push({ name: "Dashboard" });
          } */
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            this.isLoading = false;
            if (error.response.data.errors.unverifiedEmail) {
              this.$store.commit("log_reg_modal", false);
              Swal.fire({
                icon: "info",
                title: "Unverified Email Address",
                text:
                  "You are yet to verify your email address. Please click on the link that was sent to your email to verify or click on the resend button below to resend the link",
                showCancelButton: true,
                confirmButtonColor: "rgba(217, 119, 6)",
                cancelButtonColor: "#d33",
                confirmButtonText: "Resend Link",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    "Resend",
                    "A new link has been sent to " +
                      this.signInForm.email +
                      ". Please to verify",
                    "success"
                  );
                }
              });
            }
          }
        });
    },

    logout() {
      this.$store.commit("loadSpinner", true);
      Http.logout()
        .then(() => {
          this.$store.commit("LOGIN", false);
          localStorage.clear();
          this.$store.commit("loadSpinner", false);
          this.Token = null;

          this.$router.push({ name: "Home" });
        })
        .catch(() => {
          this.$store.commit("LOGIN", false);
          localStorage.removeItem("auth");
          this.$store.commit("loadSpinner", false);
          this.Token = null;

          this.$router.push({ name: "Home" });
          /* this.$store.commit("loadSpinner", false);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try logging out again',
            footer: ''
             })
 */
        });
    },

    filter() {
      if (window.location.origin.toString() + "/" != window.location.href) {
        this.filterPage = false;
      }
    },

    toggleFilter() {
      emitter.emit("toggle-filter", false);
    },

    mobileView() {
      this.menushow = !this.menushow;

      if (this.menudisplay == "hidden") {
        this.menudisplay = "block";
      } else {
        this.menudisplay = "hidden";
      }
    },

    closeModal() {
      this.$store.commit("log_reg_modal", false);
      this.reset_values();
      this.isLoading = false;
    },

    openLoginModal() {
      this.register = false;
      this.login = true;
      this.$store.commit("log_reg_modal", true);
    },

    openRegisterModal() {
      this.register = true;
      this.login = false;
      this.$store.commit("log_reg_modal", true);
    },
    LogRegModal() {
      this.reset_values();
      if (this.login) {
        this.register = true;
        this.login = false;
      } else if (this.register) {
        this.register = false;
        this.login = true;
      }
    },

    termsOfService() {
      Swal.fire({
        title: "Gehit TERMS OF SERVICE",
        html: `<div align="left">
              <p>By accepting our terms and conditions, you (user) are expressly agreeing to be bound by it. Acceptance is expressly limited to these terms. Gehit is willing to make the software/service available to user only upon the condition that user accepts the terms of this agreement.</p>
              <div><br/>
              <strong> 1.	Definition <br/></strong>
              <div style = "margin-left: 20px">
                <p>For the purpose of this agreement, the following terms will have the following meanings:</P>
                <p> <br/>
              •	‘User’ means the legal entity or person who orders or downloads the software and/or activates the services. <br/><br/>
              •	‘Documentation means the standard user technical documentation, specifications, materials and other information Gehit supplies with the software and/or services. <br/><br/>
              •	‘Software’ means the proprietary Gehit software products delivered to user hereunder, together with any update or upgrade thereto, when and if made available to you by Gehit. Software does not include Third-Party software.<br/><br/>
              •	‘Third-Party software’ means the software of certain third parties that Gehit may deliver with the software including but not limited to widgets of certain third party and independent developers. <br/><br/>
                </P>
              </div><br/>

              <strong> 2.	License <br/></strong>
              <div style = "margin-left: 20px">
                <p>Subject to this agreement, Gehit hereby grants User a limited, non-exclusive, non-transferable, non-sublicensable license to use the services and to install and use the software to User hereunder, as installed on User’s personal mobile device.</P>

              </div><br/><br/>


              <strong> 3.	License restrictions and third-party software <br/></strong>
              <div style = "margin-left: 20px">
                <p>User shall not allow any third party to:</P>
                <p> <br/>
              •	Use the software or services except as expressly permitted under section 2 <br/><br/>
              •	Separate the component programs of the software for use on different mobile devices.<br/><br/>
              •	Adapt, alter, publicly display, publicly perform, translate, embed into any other product, or otherwise create derivative works of, or otherwise modify the software or services. <br/><br/>
              •	Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code for the software except as permitted by applicable law.<br/><br/>
              •	Allow third parties to access or use software or services, including without limitation any use in any application service provider environment, service bureau or time-sharing arrangements.<br/><br/>
              •	 Gehit shall not be responsible for any third-party software.<br/><br/>

                </P>
              </div><br/>


               <strong> 4.	Use of software or services <br/></strong>
              <div style = "margin-left: 20px">
                <p>Gehit reserves the right at any time and from time to time modify or discontinue, temporarily or permanently, the software or services 9 or any part thereof) with or without notice.  User agrees that Gehit shall not be liable to User or any third-party for any modification, suspension or discontinuance of the software or services.</P>

              </div><br/>


              <strong> 5.	Proprietary rights <br/></strong>
              <div style = "margin-left: 20px">
                <p>Gehit owns all copies of the software, however made. Nothing in this agreement will be deemed to grant, by implication a license under the existing or future patents of Gehit, except the extent necessary for User to use the software or services as expressly permitted under this agreement.</P>

              </div><br/>


               <strong> 6.	Term and termination <br/></strong>
              <div style = "margin-left: 20px">
                <p>The term of this agreement will commence upon User’s download of the software and/or User’s commencement of the services and, unless earlier terminated as provided in this section 6, will continue in perpetuity. This agreement will immediately terminate upon User’s breach of this agreement, unless such breach is curable and is actually cured by the User after Gehit provides notice of breach to User.</P>

              </div><br/>

               <strong> 7.	Disclaimer of Warranties<br/></strong>
              <div style = "margin-left: 20px">
                <p>Gehit does not warrant that the use of this software or services will be uninterrupted or error free or that the software or services do not contain any viruses.</P>

              </div><br/>

              <strong> 8.	Limitation of Liability<br/></strong>
              <div style = "margin-left: 20px">
                <p>In no event shall Gehit be liable for any incidental, special, consequential, or indirect damages of any kind (including without limitation: damages for interruption of business, loss data, lost profits or the like) arising from the direct or indirect use of the software/service.</P>

              </div><br/>

              <strong> 9.	General<br/></strong>
              <div style = "margin-left: 20px">
                <p>Gehit may update the terms of this agreement if and when User update or upgrade to the software or services. User will be responsible for all of User’s access and data charges from User’s internet service provider or mobile operator.  </P>

              </div><br/>

              </div>`,

        confirmButtonColor: "rgba(217, 119, 6)",

        confirmButtonText: "OK",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.form-field {
  @apply shadow appearance-none border rounded w-full py-2 px-3;
}
</style>
