<template>
    <div class="content">

        <div v-if="!showList" class="flex flex-col p-5">
            <PlayButton class="self-center" @click="toggleList"></PlayButton>
            <p> Play now!</p>
        </div>
        <div v-if="showList">
            <IconLoading v-if="isLoading"></IconLoading>
            <QuizListComponent v-else  :quizzes="data"/>
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



</script>

<style scoped>
.content {
    @apply text-white flex flex-row justify-center items-center bg-gray-700 rounded-xl p-10 sm:m-20 m-5;
  }

</style>