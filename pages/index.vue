<template>
    <div class="content" :class="{'listopen': !showList}">
      <h1 v-show="!showList" class="self-center text-3xl font-bold">Welcome to Quiz World!</h1>
      <div class="flex flex-col lg:flex-row">
          <div class="flex flex-row">  
            <div v-show="!showList" class="flex flex-col p-5">
                <PlayButton class="self-center" @click="toggleList"></PlayButton>
               <p class="self-center"> Play now!</p>
            </div>
            <div v-if="showList">
               <IconLoading v-if="isLoading"></IconLoading>
                <QuizListComponent v-else :quizzes="data" />
            </div>
              <NuxtLink v-show="!showList" to="/create">  
                <div class="flex flex-col p-5">
                  <CreateButton class="self-center"></CreateButton>
                  <p class="self-center"> Create </p>
                </div>     
              </NuxtLink>
        </div>
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
      const response = await fetch('http://localhost:3030/quizzes') //TODO: Replace with env.
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
    @apply text-white flex flex-row items-center bg-gray-700 bg-opacity-75 rounded-none py-5 sm:mx-10 sm:rounded-b-xl;
  }

.content.listopen {
  @apply justify-center;
}

</style>