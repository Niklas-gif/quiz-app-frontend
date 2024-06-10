<template>
    <div>
        <div v-if="!isLoading && newQuiz != null">
            <NuxtLayout name="edit-layout" :quiz="newQuiz">
                <NuxtPage/>
            </NuxtLayout>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Quiz } from '~/types/quiz';
import { NetworkService } from '~/NetworkService'
import { ToastService } from '~/ToastService'

const route = useRoute()
const data = ref()
const isLoading = ref(false)
const newQuiz = ref<Quiz|null>(null)
const nuxtApp = useNuxtApp()
const networkService =  new NetworkService(nuxtApp)
const toastService = new ToastService()

onMounted(async () => {
    isLoading.value = true
    try {
      data.value = await networkService.getQuiz(`${route.query.currentQuiz}`)
      newQuiz.value = data.value[0]
    } catch(error) {
      console.log(error)
      toastService.serverUnavailable()
    }
    isLoading.value = false
})

</script>

<style scoped>

</style>