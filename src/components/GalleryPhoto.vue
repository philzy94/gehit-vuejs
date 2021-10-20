<template>
  <div
    class="modal z-20 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70"
  >
    <div class="bg-white rounded shadow-lg w-4/5 sm:w-1/3">
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h1 class="font-bold text-yellow-600 text-3xl">{{ modal.type }}</h1>
        <button class="text-black close-modal" @click="closeModal">&cross;</button>
      </div>
      <div class="p-2 text-sm text-center">
        <span class="errors">*</span> means the field must be field
      </div>
      <div class="p-3">
        <label for="file-upload" class="block text-sm font-medium text-gray-400">
          Upload Photos for your Gallery <span class="errors">*</span>
        </label>
        <label for="file-upload" class="cursor-pointer">
          <div
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-yellow-600 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <div
                v-if="Form.tem_URL"
                class="mx-auto h-12 w-12 text-yellow-600"
                id="preview"
              >
                <img :src="Form.tem_URL" />
              </div>
              <svg
                v-else
                class="mx-auto h-12 w-12 text-yellow-600"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative text-yellow-600 cursor-pointer bg-none rounded-md font-medium border hover:border-yellow-600"
                >
                  <span class="text-yellow-600">Upload a file</span>
                  <input
                    id="file-upload"
                    @change="uploadGallery"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF not more than 2MB</p>
            </div>
          </div>
        </label>
        <span class="errors" v-if="errors.photos">
          {{ errors.photos[0] }}
        </span>
        <div></div>
        <span class="errors" v-if="fileError">
          {{ fileError.file }}
        </span>
      </div>

      <div class="flex w-ful justify-end items-center w-100 border-t p-3">
        <button
          class="reg-log"
          @click="saveGallery"
          v-if="!modal.id"
          v-bind:class="{ cursordisable: isLoading }"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Save</span>
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
          v-else
          class="reg-log"
          @click="updateGallery(modal.id)"
          v-bind:class="{ cursordisable: isLoading }"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Update</span>
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
</template>

<script>
import { emitter } from "../main.js";
import Toast from "../apis/sweetAlert";
import Http from "../apis/Http";
import Swal from "sweetalert2";

export default {
  name: "GalleryPhoto",
  props: ["modal"],

  data() {
    return {
      isLoading: false,

      errors: {},
      fileError: {},

      Form: {
        photos: "",
        tem_URL: "",
      },
    };
  },

  methods: {
    closeModal() {
      this.$store.commit("ModalShow", false);
    },

    uploadGallery(e) {
      let file = e.target.files[0];
      if (file["size"] < 200000) {
        this.fileError = {};
        if (
          file["type"].toLowerCase() === "image/jpeg" ||
          file["type"].toLowerCase() === "image/png"
        ) {
          this.fileError = {};
          this.Form.tem_URL = URL.createObjectURL(file); // URL for preview
          this.Form.photos = file; // file to be uploaded to the server
        } else {
          this.fileError = { file: "Only jpeg and png filetype is allowed" };
        }
      } else {
        this.fileError = { file: "You can only upload maximum of 2MB" };
      }
    },

    saveGallery() {
      this.isLoading = true;
      this.fileError = {};

      const formData = new FormData();

      formData.append("photos", this.Form.photos);

      Http.saveGallery(formData)
        .then(() => {
          emitter.emit("get-gallery");
          this.isLoading = false;
          this.errors = {};
          this.closeModal();
          Toast.fire({
            icon: "success",
            title: "Successful",
          });
        })
        .catch((error) => {
          this.isLoading = false;
          //console.log(error.response.data.errors);
          if (error.response.status === 422) {
            this.isLoading = false;
            this.errors = error.response.data.errors;
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: "",
            });
          }
        });
    },

    updateGallery(id) {
      this.fileError = {};
      this.isLoading = true;

      const formData = new FormData();
      formData.append("photos", this.Form.photos);
      formData.append("_method", "PUT");

      Http.updateGallery(formData, id)
        .then(() => {
          emitter.emit("get-gallery");
          this.isLoading = false;
          this.closeModal();
          Toast.fire({
            icon: "success",
            title: "Update Successful",
          });
        })
        .catch((error) => {
          this.isLoading = false;
          if (error.response.status === 422) {
            this.isLoading = false;
            this.errors = error.response.data.errors;
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: "",
            });
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
