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
            <button class="button-delete" @click="deleteQuiz(quiz)"> Delete Quiz </button>
            <!--<alert v-show="showAlert" class="flex flex-col">
                <p> Do you realy want to delete the quiz?</p>
                <button @click="deleteQuiz(quiz)">Delete</button>
                <button @click="toggleAlert()"> go back</button>
            </alert>-->
        </div>
    </div>

</template>

<script setup lang="ts">
import { NetworkService } from '~/NetworkService';
import type { Quiz } from '~/types/quiz';
const networkService = new NetworkService(useNuxtApp())
const showAlert = ref(false)

const props = defineProps<({
    quiz: Quiz,
  })>()

  const questionCount = computed(() => {
  return props.quiz.questions.length
})

const emits = defineEmits(['deleteQuiz'])

function toggleAlert() {
    showAlert.value = !showAlert.value
}
function deleteQuiz(quiz: Quiz) {
  try {
    networkService.deleteQuiz(quiz)
    emits('deleteQuiz',quiz)
    
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