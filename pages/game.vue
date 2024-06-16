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
import type { Quiz } from '../types/quiz'
import { NetworkService } from '~/NetworkService'
import { ToastService } from '~/ToastService'

const route = useRoute()
const data  = ref()
const isLoading  = ref(true)
const currentQuiz = ref<Quiz | null>(null)
const nuxtApp = useNuxtApp()
const networkService =  new NetworkService(nuxtApp)
const toastService = new ToastService()

function shuffelQuiz(quiz: Quiz) {
  let questions = quiz.questions
  
  for (let i = questions.length - 1; i > 0; i--) { 
    let j = Math.floor(Math.random() * (i + 1))         
    let temp = questions[i]
    questions[i] = questions[j]
    questions[j] = temp
  }
  
  quiz.questions = questions
  return quiz
}

onMounted(async () => {
    isLoading.value = true
    try {
      data.value = await networkService.getQuiz(`${route.query.currentQuiz}`)
      currentQuiz.value = shuffelQuiz(data.value[0])
    } catch(error) {
      console.log(error)
      toastService.serverUnavailable()
    }
    isLoading.value = false
  })


</script>

<style scoped>

</style>