<template>
  <div>
    <a-input-search placeholder="Bạn muốn tìm gì ?" @search="onSearch" v-model="searchData" />
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchData: ""
    };
  },
  methods: {
    onSearch: function(value){
      alert(value);
      this.$data.searchData = "";
    }
  }
};
</script>
