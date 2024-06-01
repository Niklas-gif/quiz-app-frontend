<template>
  <div class="flex flex-row bg-slate-900 bg-opacity-50 rounded-2xl">
    <ul class="list">
      <li v-for="(quiz, index) in currentQuizzes" :key="index" @click="selectQuiz(quiz)" class="item"
        :class="{ 'selected': quiz == selectedQuiz }">
        {{ quiz.name }}
        <!--<span v-if="quiz == selectedQuiz" class="flex flex-row">
            {{quiz.description}}
            <NuxtLink :to="{ path: path, query: { currentQuiz: quiz.name }}">
              <button class="button">Play now</button>
            </NuxtLink>
            <button @click="deleteQuiz(quiz)"> Delete Quiz</button>
        </span>-->
      </li>
    </ul>
    <div class="flex flex-col p-5">
      <div class="info-container">
        <p class="quiz-heading">{{ selectedQuiz.name }}</p>
        <p>{{ selectedQuiz.description }}</p>
      </div>
      <div class="button-container">
        <NuxtLink class="button" :to="{ path: '/game', query: { currentQuiz: selectedQuiz.name } }">
          Play now!
        </NuxtLink>
        <NuxtLink class="button" :to="{ path: '/edit', query: { currentQuiz: selectedQuiz.name } }">
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
  @apply text-3xl font-bold
}

.list {
  @apply mr-5;
}

.item {
 @apply  p-2 text-white bg-orange-600 hover:bg-orange-500 border-b-orange-700 border-b-2 hover:cursor-pointer;
}

.item.selected {
  @apply bg-orange-800 hover:bg-orange-700
}

.button {
  @apply flex-1 hover:bg-purple-400 bg-purple-600 border-b-4 border-stone-800 text-white font-bold py-4 px-4 rounded-3xl hover:cursor-pointer;
}

.button-delete {
  @apply flex-1 hover:bg-red-400 bg-red-600 border-b-4 border-stone-800 text-white font-bold py-4 px-4 rounded-3xl hover:cursor-pointer;
}

.button-container {
  @apply flex flex-col;
}

.info-container {
  @apply pb-10 space-y-2;
}


</style>