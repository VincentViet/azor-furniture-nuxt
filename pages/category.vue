<template>
  <div>
    <a-layout>
      <a-affix :offsetTop="offsetTop">
        <a-layout-header
          :style="{background: '#fff'}">
          <product-filter />
        </a-layout-header>
      </a-affix>
      <a-layout-content>
        <no-ssr>
          <category title="GHẾ SOFA" />
        </no-ssr>
      </a-layout-content>
    </a-layout>
  </div>
</template>


<script>
import Category from "../components/category";
import ProductFilter from "../components/product-filter";

export default {
  layout: "category",
  data() {
    return {
      offsetTop: 0
    };
  },
  components: {
    category: Category,
    "product-filter": ProductFilter
  }
};
</script>