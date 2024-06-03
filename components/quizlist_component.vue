<template>
  <div class="flex flex-row bg-slate-900 bg-opacity-50 rounded-bl-xl">
    <ul class="list">
      <li v-for="(quiz, index) in currentQuizzes" :key="index" @click="selectQuiz(quiz)" class="item"
        :class="{ 'selected': quiz == selectedQuiz }">
        {{ quiz.name }}
      </li>
    </ul>
    <div class="flex flex-col p-5 justify-between">
      <div class="info-container">
        <p class="quiz-heading">{{ selectedQuiz.name }}</p>
      </div>
      <div class="button-container">
        <NuxtLink class="button-play" :to="{ path: '/game', query: { currentQuiz: selectedQuiz.name } }">
          Play now!
        </NuxtLink>
        <NuxtLink class="button-edit" :to="{ path: '/edit', query: { currentQuiz: selectedQuiz.name } }">
          Edit
        </NuxtLink>
        <button class="button-delete" @click="deleteQuiz(selectedQuiz)"> Delete Quiz</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {type Quiz } from "../types/quiz"
import { defineProps, ref } from 'vue'

const props = defineProps<({
    quizzes: Array<Quiz>,
  })>()

//const visibleItems = ref(Array(props.quizzes.length).fill(false));
const selectedQuiz: Ref<Quiz> = ref(props.quizzes[0]) 
const currentQuizzes: Ref<Quiz[]> =  ref(props.quizzes)


//TODO Delete quiz for the current state!!!
/*function toggleDetails(index: number) {
  visibleItems.value[index] = ! visibleItems.value[index]
}*/

function selectQuiz(quiz: Quiz) {
  selectedQuiz.value = quiz
}

/*function removeQuizFromList(quizToDelete: Quiz) {
  currentQuizzes.value = currentQuizzes.value.filter(quiz => { quizToDelete == quiz })
}*/

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
            selectedQuiz.value = currentQuizzes.value[0]
        }
    } catch (error) {
        console.error('Error sending quiz data:', error);
    }
}

</script>

<style scoped>
.quiz-heading {
  @apply text-3xl text-sky-300 font-bold truncate
}

.list {
  @apply sm:m-5;
}

/*.item {
 @apply  p-2 text-white bg-sky-500 hover:bg-sky-400 border-b-sky-700 border-b-2 hover:cursor-pointer;
}*/

.item {
 @apply  p-2 text-white hover:text-sky-400 border-l-sky-700 hover:border-l-sky-300 border-l-2 hover:cursor-pointer;
}

/*.item.selected {
  @apply bg-sky-700 hover:bg-sky-600
}*/

.item.selected {
  @apply text-sky-400 border-l-sky-400
}


.button-play {
  @apply text-center hover:bg-purple-400 bg-purple-600 text-white font-bold p-4 rounded-xl hover:cursor-pointer;
}

.button-edit {
  @apply text-center hover:bg-sky-300 bg-sky-500 text-white font-bold p-4 rounded-xl hover:cursor-pointer;
}

.button-delete {
  @apply text-center hover:bg-red-400 bg-red-600 text-white font-bold px-4 py-2 rounded-xl hover:cursor-pointer;
}

.button-container {
  @apply flex flex-col w-fit space-y-2;
}

.info-container {
  @apply flex pb-10 space-y-2 w-fit max-w-36 min-w-36;
}


</style>