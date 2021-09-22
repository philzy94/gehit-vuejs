<template>
  <div class="mt-1">
      <slider/>
      <div class=" w-full mt-9 text-center text-gray-500">
       <h1 class=" text-3xl mb-6"> WHAT DO YOU WANT DONE?</h1>
       <p>Search And Connect With The Best Artisans
        And Professionals Around You To Get Your Job Done
       </p>

      </div>
      <card/>
  </div>
</template>

<script>
import slider from '../components/slider.vue'
import card from '../components/card.vue'

export default {
  name: 'Index',
  components: {
    slider,
    card
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
