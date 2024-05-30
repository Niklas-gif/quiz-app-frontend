<template>
  <div>
  <header class="header">
    <button class="login" @click="toggleLogin">
      <iconLogin class="m-5 bg-red-300"></iconLogin>
    </button>
  </header>
  <LoginComponent v-show="showLogin"/>
  <div>
    <NuxtPage/>
  </div>
</div>
</template>

<script setup lang="ts">
const showLogin = ref(false)
import IconLogin from "assets/icons/icon_login.vue"

function toggleLogin() {
  showLogin.value = !showLogin.value
}


</script>

<style scoped>

</style>

<style>

.header {
  @apply bg-slate-600
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}
</style>
