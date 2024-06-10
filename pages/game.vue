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
import { useRoute } from 'vue-router'
import { NetworkService } from '~/NetworkService'
import { ToastService } from '~/ToastService'

const route = useRoute()
const data  = ref()
const isLoading  = ref(true)
const currentQuiz = ref<Quiz | null>(null)
const nuxtApp = useNuxtApp()
const networkService =  new NetworkService(nuxtApp)
const toastService = new ToastService()

onMounted(async () => {
    isLoading.value = true
    try {
      data.value = await networkService.getQuiz(`${route.query.currentQuiz}`)
      currentQuiz.value = data.value[0]
    } catch(error) {
      console.log(error)
      toastService.serverUnavailable()
    }
    isLoading.value = false
  })


</script>

<style scoped>

</style>