<template>
  <div>
    <h1>This page {{id}}</h1>
    <img src="http://lorempixel.com/400/200/" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
