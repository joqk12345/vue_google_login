<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import type { CallbackTypes } from 'vue3-google-login'
import { googleAuthCodeLogin } from "vue3-google-login"
const login = () => {
  googleAuthCodeLogin().then((response) => {
    console.log("Handle the response", response)
  })
}

const callback: CallbackTypes.CredentialCallback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Credential JWT string", response.credential)

  // console.log("Handle the response", response)
  // const userData = decodeCredential(response.credential)
  // console.log("Handle the userData", userData)
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <!-- <GoogleLogin :callback="callback" /> -->
      <!-- <GoogleLogin :callback="callback">
        <button>Login Using Google</button>
      </GoogleLogin> -->
      <button
        class="google-login-btn"
        @click="login"
      >
        <span class="google-icon"></span> Login Using Google
      </button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .google-login-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4285f4;
    /* Google 蓝色 */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .google-login-btn:hover {
    background-color: #3c78dc;
    /* 鼠标悬停时的颜色 */
  }

  .google-icon::before {
    content: '\e8d4';
    /* Google Material Icons 的 Google 图标代码 */
    font-family: 'Material Icons';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
  }
}
</style>
