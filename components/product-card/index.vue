<template>
  <a-card hoverable style="width: 240px" :loading="loading">
    <img 
      alt="example"
      :src="`https://picsum.photos/id/${id}/200/300`"
      slot="cover"
    />
    <a-card-meta title="Europe Street beat">
      <template slot="description">www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      imgData: "",
      loading: false
    };
  },
  beforeCreate() {},
  props: ['id']
};
</script>

