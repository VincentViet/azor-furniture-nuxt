<template>
  <div>
    <img src="../../assets/logo.png" v-bind:width="width" v-bind:height="height" alt />
  </div>
</template>

<script>
export default {
  name: "search-bar-logo",
  props: ["width", "height"],
};
</script>