<template>
  <div class="mt-1">
    <div
      class="modal z-20 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-yellow-600"
    >
      <div
        v-if="ShowSpinner"
        class="modal z-20 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70"
      >
        <svg
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
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Http from "../apis/Http";

//import Toast from "../apis/sweetAlert";

export default {
  name: "Email Verifiation",
  components: {},
  mounted() {
    this.verificationMessage();
  },

  data() {
    return {
      ShowSpinner: true,
    };
  },

  methods: {
    verificationMessage() {
      const verification_token = window.location.pathname
        .toString()
        .split("/")[2]
        .toLowerCase();

      if (verification_token != "verified") {
        Http.verifyEmail(verification_token)
          .then(() => {
            this.ShowSpinner = false;
            Swal.fire({
              title: "Email Verification",
              icon: "success",
              confirmButtonColor: "#cc4400",
              confirmButtonText: "OK",
              allowOutsideClick: false,
              allowEscapeKey: false,
              text:
                'Your email verification was successful. Please click on the "OK" button to proceed to login',
              footer: "",
            }).then((result) => {
              this.$store.commit("log_reg_modal", true);
              if (result.isConfirmed) {
                this.$router.push({ name: "Home" });
              } else {
                this.$router.push({ name: "Home" });
              }
            });
          })
          .catch((error) => {
            this.ShowSpinner = false;
            console.log(error.response.data.message);
            Swal.fire({
              title: "Email Verification Error",
              icon: "error",
              showCancelButton: true,
              confirmButtonText: "OK",
              allowOutsideClick: false,
              allowEscapeKey: false,
              text:
                'Your email verification failed. Please try again or resend another verificaton link by clicking on the "Resend" button below. You came go back to Home Page by clicking the ok button',
              footer: "",
            }).then(async (result) => {
              if (result.isConfirmed) {
                const { value: email } = await Swal.fire({
                  title: "Input email address",
                  input: "email",
                  inputLabel: "Your email address",
                  inputPlaceholder: "Enter your email address",
                });

                if (email) {
                  this.ShowSpinner = true;
                  Http.emailVerificationLink(this.signInForm)
                    .then(() => {
                      this.ShowSpinner = false;
                      Swal.fire(
                        "Resend",
                        "A new link has been sent to " + email + ". Please verify",
                        "success"
                      );
                    })
                    .catch(() => {
                      this.ShowSpinner = false;
                      Swal.fire({
                        title: "Email Verification link Error",
                        icon: "error",
                        confirmButtonColor: "red",
                        confirmButtonText: "OK",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        text:
                          "There was an error trying to send verification link. It is either the email does not exist or server error",
                        footer: "",
                      }).then(() => {
                        this.ShowSpinner = false;
                        this.$router.push({ name: "Home" });
                      });
                    });
                }
              } else {
                this.ShowSpinner = false;
                this.$router.push({ name: "Home" });
              }
            });
          });
      } else {
        this.ShowSpinner = false;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          confirmButtonColor: "#3085d6",
          text: "Email Verification failed",
          footer: "",
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
