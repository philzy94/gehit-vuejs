<template>
  <div class="w-full">
    <div class="z-20 bg-white sticky top-0">
      <Header />
    </div>

    <div class="bg-white grid grid-cols-5">
      <div v-if="filterPage">
        <div class="md:visible z-10" :class="filterShow ? 'invisible' : ''">
          <filters />
        </div>
      </div>

      <div @click="filterShow = true" class="col-span-5 md:col-span-4">
        <router-view />
      </div>
    </div>

    <div class="mb-0 w-full z-40 h-32 bg-yellow-600"></div>
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
</template>

<script>
import Header from "./components/Header.vue";
import filters from "./components/filters.vue";
//import index from './pages/index.vue'
//import timeline from './pages/timeline.vue'
import { emitter } from "./main.js";

export default {
  name: "App",
  components: {
    Header,
    //index,
    //timeline,
    filters,
  },

  mounted() {
    this.filter();
  },

  data() {
    return {
      filterShow: true,
      filterPage: true,
    };
  },

  computed: {
    ShowSpinner() {
      return this.$store.getters.isLoadSpinner;
    },
  },

  methods: {
    filter() {
      console.log(window.location.toString() + "/");
      if (window.location.origin.toString() + "/" != window.location.href) {
        this.filterPage = false;
      }
    },

    close() {
      this.filterShow = false;
    },
  },
  created() {
    emitter.on("toggle-filter", (isOpen) => {
      this.filterShow = isOpen;
    });
  },
};
</script>

<style scope></style>
