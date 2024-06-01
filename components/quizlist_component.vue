<template> 
<ul>
    <li  v-for="(quiz, index) in props.quizzes" :key="index" @click="toggleDetails(index)" class="item">
         {{quiz.name}}   
        <span v-if="visibleItems[index]" class="flex flex-col">
            {{quiz.description}}
            <NuxtLink :to="{ path: path, query: { currentQuiz: quiz.name }}">
              <button class="button">Play now</button>
            </NuxtLink>
            <button @click="deleteQuiz(quiz)"> Delete Quiz</button>
        </span>
    </li>
</ul>

</template>

<script setup lang="ts">
import {type Quiz } from "../types/quiz"
import { defineProps, ref } from 'vue'

const props = defineProps<({
    quizzes: Array<Quiz>,
    path: string,

    //TODO Path and query as prop?
  })>()

const visibleItems = ref(Array(props.quizzes.length).fill(false));

function toggleDetails(index: number) {
  visibleItems.value[index] = ! visibleItems.value[index]
}

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
        }
    } catch (error) {
        console.error('Error sending quiz data:', error);
    }
}

</script>

<style scoped>
.item {
 @apply text-white bg-orange-600 rounded-3xl p-5 m-5 hover:bg-orange-500 hover:cursor-pointer
}

.button {
  @apply hover:bg-purple-400 bg-purple-600 border-b-4 border-stone-800 text-white font-bold py-4 px-4 rounded-3xl hover:cursor-pointer;
}


</style>