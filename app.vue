<template>
  <div>
  <header class="header">
    <nav>
    <NuxtLink  to="/"> 
        <button>
          <IconHome class="icon-header"></IconHome>
        </button>
    </NuxtLink>
  </nav>
  <nav>
    <button  @click="toggleLogin">
      <IconLogin class="icon-header"></IconLogin>
    </button>
  </nav>
  </header>
  <LoginComponent class="absolute right-0 sm:right-10 lg:right-32" v-show="showLogin"/> 
  <div>
  <NuxtLayout>
      <NuxtPage/>
  </NuxtLayout>
  </div>
</div>
</template>

<script setup lang="ts">
import IconLogin from "assets/icons/icon_login.vue"
import IconHome from "assets/icons/icon_home.vue"
import { NetworkService } from "./NetworkService";
const showLogin = ref(false)
const networkService = new NetworkService(useNuxtApp())
function toggleLogin() {
  showLogin.value = !showLogin.value
}

/*onBeforeMount(()=> {
  //If login credentials exist and are stored in local storage login again
  if(localStorage.getItem("email") != undefined && localStorage.getItem("password") != undefined) {
  networkService.login()
  } else {
    console.log("No login credentials")
  }
})*/


</script>

<style scoped>

</style>

<style>

.header {
  @apply bg-slate-800 flex justify-between items-center shadow-lg sm:mx-10 lg:mx-32; 
}

.header-icon {
  @apply fill-yellow-300 hover:fill-yellow-600 h-12 w-12 m-5;
}

.page-enter-active{
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}

.v-enter-active,
.v-leave-active {
  transition:  0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
