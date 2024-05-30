<template>
  <div>
    <div v-if="!isLoading && currentQuiz != null">
        <NuxtLayout name="quiz-layout" :quiz="currentQuiz">
            <NuxtPage/>
        </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Quiz } from '../types/quiz';
import { useRoute } from 'vue-router';

const route = useRoute()
const data  = ref()
const isLoading  = ref(true)
const currentQuiz = ref<Quiz | null>(null)

onMounted(async () => {
    isLoading.value = true
    try {
      const response = await fetch(`http://localhost:3030/quizzes/${route.query.currentQuiz}`)
      data.value = await response.json()
      currentQuiz.value = data.value[0]
    } catch(error) {
      console.log(error)
    }
    isLoading.value = false
  })


</script>

<style scoped>

</style>