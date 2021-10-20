<template>
  <div class="mt-1">
    <div
      class="modal z-20 h-screen w-full fixed left-0 top-0 justify-center items-center bg-yellow-600"
    >
      <div
        v-if="!ShowSpinner"
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

      <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-4">
          <div>
            <div class="py-2">
              <label for="category" class="block text-sm font-medium text-white">
                Select State <span class="errors">*</span>
              </label>

              <div class="mt-1 flex rounded-md shadow-sm">
                <span class="input-icon">
                  <svg
                    class="h-6 w-6 text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </span>

                <select
                  v-model="selectStateId"
                  @change="getLocations(this.selectStateId)"
                  name="state"
                  class="input-field"
                >
                  <option value="" disabled>---Select State---</option>
                  <option v-for="state in States" :key="state.id" :value="state.id">
                    {{ state.state }}
                  </option>
                </select>
              </div>
              <span class="errors bg-white" v-if="errors.state_id">
                {{ errors.state_id[0] }}
              </span>
            </div>

            <div class="py-2">
              <label for="location" class="block text-sm font-medium text-white">
                Add Location <span class="errors">*</span>
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <span class="input-icon">
                  <svg
                    class="h-6 w-6 text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  v-model="NewLocationForm.location"
                  type="text"
                  name="location"
                  id="location"
                  class="block w-full py-2 px-3 border bg-white rounded-none shadow-sm focus:outline-none focus:ring-indigo-500 border-yellow-600 sm:text-sm text-gray-500"
                  placeholder="Location"
                />
                <button
                  class="items-center px-5 rounded-r-md border border-white bg-yellow-600 text-white text-md"
                  @click="addlocation"
                >
                  ADD
                </button>
              </div>
              <span class="errors bg-white" v-if="errors.location">
                {{ errors.location[0] }}
              </span>
            </div>
          </div>

          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    List of location
                  </h3>
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      S/N
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      LOCATIONS
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      EDIT
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      DELETE
                    </th>
                  </tr>
                </thead>

                <tbody
                  v-for="(location, index) in getCurrentLocations"
                  :key="location.id"
                >
                  <tr>
                    <th
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"
                    >
                      {{ index + 1 }}
                    </th>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      {{ location.location }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div class="relative w-full max-w-full flex-grow flex-1">
                        <button
                          class="bg-blue-800 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          @click="editLocationModal(location)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div class="relative w-full max-w-full flex-grow flex-1">
                        <button
                          @click="deleteLocations(location)"
                          class="bg-red-700 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Toast from "../apis/sweetAlert";
import Http from "../apis/Http";

export default {
  name: "Location",
  components: {},
  mounted() {
    this.getState();
  },

  data() {
    return {
      ShowSpinner: true,
      States: "",
      selectStateId: "",
      selectedStateLocations: "",
      errors: [],

      NewLocationForm: {
        location: "",
        state_id: "",
      },

      UpdateLocation: {
        location: "",
      },
    };
  },
  computed: {
    getCurrentLocations() {
      return this.selectedStateLocations;
    },
  },

  methods: {
    addlocation() {
      this.$store.commit("loadSpinner", true);
      Http.saveLocation(this.NewLocationForm)
        .then(() => {
          this.$store.commit("loadSpinner", false);
          this.NewLocationForm.location = "";
          this.errors = [];
          this.getLocations(this.selectStateId);
          Toast.fire({
            icon: "success",
            title: "Location added Successfully",
          });
        })
        .catch((error) => {
          this.$store.commit("loadSpinner", false);
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! Fail to add location.",
              footer: "",
            });
          }
        });
    },
    getState() {
      this.$store.commit("loadSpinner", true);
      Http.getState()
        .then((response) => {
          this.States = response.data;

          this.$store.commit("loadSpinner", false);
        })
        .catch(() => {
          this.$store.commit("loadSpinner", false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "An error occured while trying to get the total states from the database... Please refresh this page.",
            footer: "",
          });
        });
    },
    getLocations(stateId) {
      this.$store.commit("loadSpinner", true);
      this.NewLocationForm.location = "";
      this.NewLocationForm.state_id = this.selectStateId;
      Http.getLocations(stateId)
        .then((response) => {
          this.$store.commit("loadSpinner", false);
          this.selectedStateLocations = response.data;
        })
        .catch(() => {
          this.$store.commit("loadSpinner", false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "An error Occured while trying to get location or location does not exist",
            footer: "",
          });
        });
    },
    editLocationModal(editLocation) {
      Swal.fire({
        title: "Edit Location",
        input: "text",
        inputValue: editLocation.location,
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: "true",
        confirmButtonText: "Update",
        showLoaderOnConfirm: true,
        preConfirm: (location) => {
          this.$store.commit("loadSpinner", true);
          this.UpdateLocation.location = location;

          this.editLocations(this.UpdateLocation, editLocation);
        },
      });
    },
    editLocations(form, editLocation) {
      Http.updateLocation(form, editLocation.id)
        .then(() => {
          this.$store.commit("loadSpinner", false);
          this.selectedStateLocations[
            this.selectedStateLocations.indexOf(editLocation)
          ].location = this.UpdateLocation.location;

          this.UpdateLocation.location = "";

          Toast.fire({
            icon: "success",
            title: "Update Successful",
          });
        })
        .catch(() => {
          //console.log(error.response);
          this.$store.commit("loadSpinner", false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "An error occured while trying to edit location. It's either the location you are trying to update to already exist or there is a serve error. Try again.",
            footer: "",
          });
        });
    },

    deleteLocations(location) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.commit("loadSpinner", true);

          Http.deleteLocation(location.id)
            .then(() => {
              this.$store.commit("loadSpinner", false);
              this.selectedStateLocations = this.selectedStateLocations.filter(
                (item) => item !== location
              );
              Swal.fire("Deleted!", "Location has been deleted.", "success");
            })
            .catch(() => {
              this.$store.commit("loadSpinner", false);
              //console.log(error.response);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                  "Something went wrong! location not deleted. Either of the following can be the reason. There is an error reaching the serve, or you are trying to delete a location that has already been use (You have to delete every artisan that is using the location before u can delete the location)",
                footer: "",
              });
            });
        }
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
