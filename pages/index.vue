<template>
  <div class="content" :class="{ 'listopen': showList }">
    <h1 v-show="!showList" class="text-3xl font-bold my-5">Welcome to Quiz World!</h1>
    <div class="button-container">
      <div v-show="!showList" class="flex flex-col p-5">
        <PlayButton class="self-center" @click="toggleList"></PlayButton>
        <p class="self-center"> Play now!</p>
      </div>
      <NuxtLink v-show="!showList" to="/create">
        <div class="flex flex-col p-5">
          <CreateButton class="self-center"></CreateButton>
          <p class="self-center"> Create </p>
        </div>
      </NuxtLink>
    </div>
    <Transition>
      <div v-if="showList">
        <IconLoading v-if="isLoading"></IconLoading>
        <QuizListComponent v-else :quizzes="data" />
        <FabButton></FabButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import FabButton from '~/components/fab_create_button.vue'
  import QuizListComponent from '~/components/quizlist_component.vue'
  import IconLoading from "assets/icons/icon_loading.vue"
  import { NetworkService } from '~/NetworkService'
  import { ToastService } from '~/ToastService'
  const data  = ref([])
  const isLoading  = ref(true)
  const showList = ref(false)
  const nuxtApp = useNuxtApp()
  const networkService =  new NetworkService(nuxtApp)
  
  onMounted(async () => {
    isLoading.value = true
    try {
      data.value = await networkService.getQuizzes() as any
    } catch(error) {
      console.log(error)
    }
    isLoading.value = false
  })

function toggleList() {
    showList.value = !showList.value
}
</script>

<style scoped>
.content {
    @apply items-center flex flex-col h-svh text-white  bg-gray-700 bg-opacity-75 rounded-none sm:mx-10 lg:mx-32 sm:rounded-b-xl
  }
.button-container {
  @apply flex flex-row space-x-2
}

.listopen.content {
  @apply items-start justify-normal
}

</style>