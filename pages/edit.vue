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

const route = useRoute()
const data = ref()
const isLoading = ref(false)
const newQuiz = ref<Quiz|null>(null)

onMounted(async () => {
    isLoading.value = true
    try {
      const response = await fetch(`http://localhost:3030/quizzes/${route.query.currentQuiz}`) //import.meta.env.VITE_ADDRESS
      data.value = await response.json()
      newQuiz.value = data.value[0]
    } catch(error) {
      console.log(error)
    }
    isLoading.value = false
})

</script>

<style scoped>

</style>