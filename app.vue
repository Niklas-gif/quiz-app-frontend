<template>
  <div>
  <header>
    <button class="login" @click="toggleLogin">Login</button>
    <LoginComponent v-show="showLogin"/>
  </header>
  <div>
    <NuxtPage/>
  </div>
</div>
</template>

<script setup lang="ts">
const showLogin = ref(false)

function toggleLogin() {
  showLogin.value = !showLogin.value
}


</script>

<style scoped>
  .login {
    @apply bg-slate-400;
  }
</style>

<style>

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
