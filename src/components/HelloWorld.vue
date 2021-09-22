<template>
  <div class="">
    <button
      @click="logout"
      class="text-xs ring-yellow-600 text-purple-head-color ring-1 py-1 px-2 mr-1 rounded-md hover:text-white hover:bg-yellow-600"
    >
      <span class="flex">
        <label>logout</label>
        <div class="">
          <i class="fal fa-sign-in-alt"></i>
        </div>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
