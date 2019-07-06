<template>
  <div>
    <a-drawer
      title="ĐĂNG NHẬP"
      destroyOnClose
      :width="500"
      @close="onClose"
      :visible="visible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <a-row type="flex" justify="space-around" align="middle">
        <logo />
      </a-row>
      <a-form :form="form" layout="vertical" hideRequiredMark>
        <a-row>
          <a-form-item label="Tài khoản">
            <a-input
              v-decorator="['username', {
                  rules: [{ required: true, message: 'Vui lòng nhập tài khoản' }]
                }]"
              placeholder="tài khoản"
              @change="onUsernameChange"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="Mật khẩu">
            <a-input
              v-decorator="['password', {
                  rules: [{ required: true, message: 'Vui lòng nhập mật khẩu' }]
                }]"
              placeholder="mật khẩu"
              type="password"
              :disabled="passDisable"
              @change="onPassChange"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
        </a-row>
      </a-form>
      <a-row type="flex" justify="end">
        <nuxt-link to="/forgot" :style="{marginRight: '20px'}">Quên mật khẩu ?</nuxt-link>
      </a-row>

      <a-row type="flex" justify="end" :gutter="16" :style="{marginTop: '10px'}">
        <a-col>
          <a-button type="primary" @click="onSignIn" :disabled="signInDisable">Đăng nhập</a-button>
        </a-col>
        <a-col>
          <a-button type="danger" @click="onClose">Hủy</a-button>
        </a-col>
      </a-row>
      <a-row
        type="flex"
        justify="space-around"
        align="middle"
        :style="{
          marginBottom: '10px',
          marginTop: '50px'
      
      }"
      >
        <a-button block type="primary" icon="google-plus">Đăng nhập bằng Google</a-button>
      </a-row>
      <a-row type="flex" justify="space-around" align="middle" :style="{marginTop: '10px'}">
        <a-button block type="primary" icon="facebook">Đăng nhập bằng Facebook</a-button>
      </a-row>
    </a-drawer>
  </div>
</template>
<script>
import Logo from "../logo";

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
      passDisable: true,
      signInDisable: true,
      username: "",
      password: ""
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onSignIn() {
      console.log("sign in");
    },
    onUsernameChange(e) {
      const { value } = e.target;
      this.$data.passDisable = value.length === 0;
      this.$data.signInDisable =
        this.$data.passDisable || this.$data.signInDisable;
    },
    onPassChange(e) {
      const { value } = e.target;
      this.$data.signInDisable = value.length === 0;
    }
  },
  components: {
    logo: Logo
  }
};
</script>
