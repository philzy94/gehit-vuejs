<template>
  <div class="">
      <div class="fixed w-filter bg-white">
        <div class=" shadow-sm h-full border-gray-300 border-t-2 b-r b-l m-2 ">
           
          <div class=" w-full bg-gray-100 p-1 flex justify-between">      
            <h3 class="text-center">FILTER</h3>
            <button  @click="closeFilter" class=" md:hidden">
              <svg class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
            </button>
          </div>
          <div class=" text-right px-3 py-5">
            <select class="py-1 text-gray-700 bg-gray-50 text-sm w-full">
              <option selected disabled>Select State</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
            <select class="py-1 text-gray-700 bg-gray-50 text-sm w-full">
              <option selected disabled>Select State</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
            <select class="py-1 text-gray-700 bg-gray-50 text-sm w-full">
              <option selected disabled>Select State</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
              
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import {emitter} from '../main.js'

export default {
  data() {
    return {
      
    };
  },
methods: {
    closeFilter() {
      
      emitter.emit("toggle-filter", true);
    }
  },
  mounted() {
    
  },
  beforeUnmount() {
    
  },
};
</script>

<style scope>
.w-filter{
  width: 20%;
  min-width: 140px;
  height: 100%;
}

.b-r{
  border-right-width: 0.5px;
}
.b-l{
  border-left-width: 0.5px;
}

</style>>