<template>
    <div class="content">
        <div class="info-container">
            <h2 class="quiz-title">{{ props.quiz.name }}</h2>
            <p>Amount of questions: {{ questionCount }}</p>
            <p>Description: {{ props.quiz.description }}</p>
        </div>
        <div class="button-container">
            <NuxtLink class="button-play" :to="{ path: '/game', query: { currentQuiz: quiz.name } }">
                Play now!
            </NuxtLink>
            <NuxtLink class="button-edit" :to="{ path: '/edit', query: { currentQuiz: quiz.name } }">
                Edit
            </NuxtLink>
            <button class="button-delete" @click="deleteQuiz(quiz)"> Delete Quiz</button>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Quiz } from '~/types/quiz';

const props = defineProps<({
    quiz: Quiz,
  })>()

  const questionCount = computed(() => {
  return props.quiz.questions.length
})

//TODO
async function deleteQuiz(quiz: Quiz) {
  try {
    const token = localStorage.getItem('Bearer')
    const response = await fetch('http://localhost:3030/delete', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quiz)
    })
    if (response.ok) {
      console.log(response);
      //removeQuizFromList(selectedQuiz.value)
      //selectedQuiz.value = currentQuizzes.value[0]
    }
  } catch (error) {
    console.error('Error sending quiz data:', error);
  }
}

</script>

<style scoped>
.content {
    @apply sm:p-10 flex flex-col p-5
}

.info-container {
    @apply mb-5 w-fit text-wrap max-w-2xl
}

.quiz-title {
    @apply text-sky-300 text-3xl font-bold mb-5
}

.button-play {
    @apply text-center hover:bg-purple-400 bg-purple-600 text-white font-bold p-4 rounded-xl hover:cursor-pointer;
}

.button-edit {
    @apply text-center hover:bg-sky-300 bg-sky-500 text-white font-bold p-4 rounded-xl hover:cursor-pointer;
}

.button-delete {
    @apply text-center hover:bg-red-400 bg-red-600 text-white font-bold p-4 rounded-xl hover:cursor-pointer;
}

.button-container {
    @apply flex flex-col lg:flex-row w-fit lg:space-x-2 lg:space-y-0 space-y-2;
}
</style>