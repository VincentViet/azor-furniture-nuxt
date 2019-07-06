<template>
  <a-layout>
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
      :width="sideWidth"
      :theme="menuTheme"
    >
      <a-row type="flex" justify="space-around" align="middle">
        <logo />
      </a-row>
      <a-row>
        <main-menu />
      </a-row>
    </a-layout-sider>
    <a-layout :style="{ 
      marginLeft: sideWidth + 'px'}">
      <a-layout-header
        :style="{ background: '#fff', padding: 0 }"
      >
        <search-bar />
      </a-layout-header>
      
      <a-layout-content
        :style="{ 
          margin: '24px 16px 0 16px', 
          overflow: 'initial', 
          height: '2000px' }"
      >
        <breadcumb />
        <nuxt />
      </a-layout-content>

      <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import MainMenu from "../components/menu";
import Logo from "../components/logo";
import SearchBar from "../components/search-bar";
import Breadcumb from "../components/breadcrumb";

export default {
  data() {
    return {
      sideWidth: 250,
      filterTheme: "light",
      menuTheme: "dark"
    };
  },
  components: {
    "main-menu": MainMenu,
    logo: Logo,
    "search-bar": SearchBar,
    breadcumb: Breadcumb,
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
