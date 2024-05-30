<template>
    <div>
        <NuxtLayout name="create-layout" :quiz="newQuiz">
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import type { Quiz } from '~/types/quiz';

const newQuiz: Ref<Quiz|null> = ref(null)
const route = useRoute()
const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    try {
      const response = await fetch(`http://localhost:3030/quizzes/${route.query.currentQuiz}`)
      const data = await response.json()
      newQuiz.value = data[0]
    } catch(error) {
      console.log(error)
    }
    isLoading.value = false
})

</script>

<style scoped>

</style>