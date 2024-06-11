<template>
    <div class="container">
        <h1 class="title">GAME OVER!</h1>
      <p class="text-lg font-bold mb-4">
        {{ props.correctQuestions }} out of {{ props.questions.length }} questions are Correct
      </p>
      <NuxtLink to="/" class="goback">
        <p>Go back</p>
      </NuxtLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Question } from '~/types/question';
  
  const props = defineProps<{
    correctQuestions: number,
    questions: Question[]
  }>();
  </script>
  
  <style scoped>
  .title {
    @apply text-center text-4xl font-bold animate-pulse mb-5
  }

  .container {
    @apply flex flex-col text-sky-400 items-center justify-center p-6;
  }

  .goback {
    @apply text-sky-400 hover:text-sky-200 bg-slate-700 rounded-lg p-5
  }
  </style>
  