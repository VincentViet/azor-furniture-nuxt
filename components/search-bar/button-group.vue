<template>
    <div>
        <a-button type="primary" id="sign-in" @click="onSignIn">Đăng nhập</a-button>
        <a-button type="primary" id="sign-up" @click="onSignUp">Đăng kí</a-button>
    </div>
</template>

<script>
export default {
    methods: {
        onSignIn: function(){
            this.$emit('signIn');
            // alert("Sign In");
        },
        onSignUp: function(){
            this.$emit('signUp')
            // alert("Sign Up");
        }
    }
}
</script>

<style>
#sign-in{
    margin-right: 5px;
}
#sign-up{
    margin-left: 5px;
}
</style>

