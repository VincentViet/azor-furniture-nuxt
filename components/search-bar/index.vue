<template>
  <div>
    <div>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="8">
          <search />
        </a-col>
        <a-col :span="10">
          <a-row type="flex" justify="space-around" align="middle">
            <button-group @signIn="onSignIn" @signUp="onSignUp" />
          </a-row>
        </a-col>
      </a-row>
    </div>
    <sign-in ref="signInForm" />
    <sign-up ref="signUpForm" />
  </div>
</template>

<script>
import Logo from "./logo";
import Search from "./search";
import ButtonGroup from "./button-group";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

export default {
  props: {
    msg: String
  },
  components: {
    logo: Logo,
    search: Search,
    "button-group": ButtonGroup,
    "sign-in": SignIn,
    "sign-up": SignUp
  },
  methods: {
    onSignIn: function() {
      this.$refs.signInForm.showDrawer();
    },
    onSignUp: function() {
      this.$refs.signUpForm.showDrawer();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css">
</style>
