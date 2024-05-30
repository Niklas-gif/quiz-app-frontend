<template>
    <div class="content">
      <div class="flex flex-col lg:flex-row mx-10 px-10">
          <div class="flex flex-col">
            <h1 v-show="!showList" class="self-center text-xl font-bold">Welcome to Quiz World!</h1>
            <div v-show="!showList" class="flex flex-col p-5">
                <PlayButton class="self-center" @click="toggleList"></PlayButton>
               <p class="self-center"> Play now!</p>
            </div>
            <div v-if="showList">
               <IconLoading v-if="isLoading"></IconLoading>
                <QuizListComponent v-else path="game"  :quizzes="data"/>
            </div>
              <NuxtLink v-show="!showList" to="/create">  
                <div class="flex flex-col p-5">
                  <CreateButton class="self-center"></CreateButton>
                  <p class="self-center"> Create </p>
                </div>     
              </NuxtLink>
        </div>
        <!--DEBUG-->
        <button class="bg-red-500 h-fit p-5 m-5" @click="toggleDebug">EDIT DEBUG!!!!</button>
        <div v-show="debug">
          <p>LIST FOR EDITING DEBUG!!!!</p>
          <IconLoading v-if="isLoading"></IconLoading>
          <QuizListComponent v-else path="edit"  :quizzes="data"/>
        </div>
        <!--DEBUG-->
      </div>
    </div>
</template>

<script setup lang="ts">

  import { ref } from 'vue'
  import QuizListComponent from '~/components/quizlist_component.vue'
  import IconLoading from "assets/icons/icon_loading.vue"
  const data  = ref([])
  const isLoading  = ref(true)
  const showList = ref(false)
  const debug = ref(false)
  
  onMounted(async () => {
    isLoading.value = true
    try {
      const response = await fetch('http://localhost:3030/quizzes')
      data.value = await response.json()
    } catch(error) {
      console.log(error)
    }
    isLoading.value = false
  })

function toggleList() {
    showList.value = !showList.value
}

function toggleDebug() {
  debug.value = !debug.value
}

</script>

<style scoped>
.content {
    @apply text-white flex flex-row justify-center items-center bg-gray-700 rounded-xl p-10 sm:m-20 m-5;
  }

</style>