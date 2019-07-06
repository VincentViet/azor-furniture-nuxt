<template>
  <div>
    <a-menu
      style="width: 250px"
      :openKeys.sync="openKeys"
      :theme="theme"
      mode="inline"
    >
      <a-menu-item id="home">
        <a href="/">
          <a-icon type="home" />
          <span id="home-content">Trang chủ</span>
        </a>
      </a-menu-item>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore" />
          <span>Navigation Two</span>
        </span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="setting" />
          <span>Navigation Three</span>
        </span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "main-menu",
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
      theme: "dark"
    };
  },
  methods: {
    titleClick() {
      alert("option 3");
    }
  },
  watch: {
    openKeys() {
      //   alert('openKeys', val)
    }
  }
};
</script>

<style scoped>
#home {
  background-color: #008ffa;
}
#home-content{
  color: #ffffff;
}
</style>


