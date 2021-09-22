<template>
  <div class="px-2">
      <div class="flex flex-wrap w-full relative overflow-hidden">
            <div class="absolute w-full" v-for="(image, index) in sliders" :key="image">
            <transition name="fade">
                <div
                v-if="currentSlide == index"                
                style="height:350px"
                >
                <img class="h-full w-full object-cover" :src="image" alt="Workflow">
                </div>
            </transition>
           
            </div>
            <div class="w-full" style="height:340px">
            <div class="absolute bottom-0 w-full flex justify-center">
                <div
                v-for="(slider, index) in sliders"
                :key="slider"
                @click="makeActive(index)"
                :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
                class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
                ></div>
            </div>
            </div>

        </div>
  </div>
</template>

<script scope>
export default {
  data() {
    return {
      currentSlide: 1,
      sliders: ["https://images.unsplash.com/photo-1524224971825-8c690dec4b7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", "https://images.unsplash.com/photo-1606077089119-92075161bb60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1368&q=80", "https://images.unsplash.com/photo-1519396710158-99d7ed65c7dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"],
      interval: "",
      isTitleShowing: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>