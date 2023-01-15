<template>
  <div class="container">
    <div class="login-wrap">
      <div class="login-top">
        <div class="logo">
          <NuxtLink :to="{name: 'home'}">
            <img src="~assets/img/logo.png" alt="logo">
          </NuxtLink>
        </div>
      </div>

      <div class="login-form-wrap">
        <div class="login-form">
          <TheForm title="Sign up" :handle="login">
            <div class="login-inputs">
              <div class="login-input">
                <TheInput name="email" v-model="sendData.email" rules="required|email" placeholder="Email address"/>
              </div>

              <div class="login-input">
                <TheInput name="password" v-model="sendData.password" rules="required" placeholder="Password"/>
              </div>

              <div class="login-input">
                <TheInput name="password" v-model="sendData.repeatPassword" :rules="`required|is:${sendData.password}`" placeholder="Repeat password"/>
              </div>
            </div>

            <button class="btn login-btn">Create an account</button>

            <div class="login-label">
              <span class="login-label-text text-m">Already have an account?</span>
              <NuxtLink :to="{name: 'login'}" class="link">Login</NuxtLink>
            </div>
          </TheForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheForm from "../components/form/The-form";
import TheInput from "../components/form/The-input";

export default {
  name: "login",
  layout: 'login',
  components: {TheInput, TheForm},
  data() {
    return {
      sendData: {
        email: '',
        password: '',
        repeatPassword: '',
      }
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style scoped>

</style>
