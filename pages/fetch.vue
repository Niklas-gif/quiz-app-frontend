<template>
<div class="content">
    <QuizComponent :description="exampleQuiz.description" :name="exampleQuiz.name" :questions="exampleQuiz.questions"></QuizComponent> 
</div>
</template>

<script setup lang="ts">
import {type Quiz } from "~/types/quiz";

//const dataTwice = await $fetch('https://jsonplaceholder.typicode.com/posts')
//Test fetch
const dataTwice = await fetch('http://localhost:3030/quizzes')
let data = await dataTwice.json()
let exampleQuiz :Quiz = data[0]

</script>

<style scoped>
.content {
    margin-left: 100px;
    margin-right: 100px;
    @apply flex flex-col mt-16 justify-center items-center text-white bg-gray-700 rounded-xl p-10;
  }
</style>