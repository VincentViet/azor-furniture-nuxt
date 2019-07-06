<template>
  <div>
    <a-row>
      <carousel />
    </a-row>
    <a-row :style="{marginTop: '150px'}">
      <category-intro title="GHẾ  SOFA" detailsURL="/category"/>
    </a-row>
  </div>
</template>

<script>
import Carousel from "../components/carousel";
import CategoryIntro from "../components/category-intro";

export default {
  components: {
    carousel: Carousel,
    "category-intro": CategoryIntro
  }
};
</script>