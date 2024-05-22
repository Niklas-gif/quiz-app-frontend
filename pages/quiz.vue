<template>
    <div v-if="!isLoading && currentQuiz != null">
        <NuxtLayout :name="layout" :quiz="currentQuiz">
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">

const layout = 'quiz-layout'
import { ref } from 'vue';
import type { Quiz } from '../types/quiz';

const data  = ref()
const isLoading  = ref(true)
let currentQuiz = ref<Quiz | null>(null)

onMounted(async () => {
    isLoading.value = true
    try {
      const response = await fetch('http://localhost:3030/quizzes/Quiz2')
      data.value = await response.json()
      console.log(data.value)
      currentQuiz.value = data.value[0] //TODO inside of the backend every Quiz with the name gets returned FIX THIS!
    } catch(error) {
      console.log(error)
    }
    isLoading.value = false
  })


</script>

<style scoped>

</style>