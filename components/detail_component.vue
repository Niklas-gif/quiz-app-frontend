<template>
    <div>
        <h2>{{props.quiz.name}}</h2>
        <p>{{props.quiz.description}}</p>
        <p>Amount of questions:{{questionCount}}</p>
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

</script>

<style scoped>

.quiz-title {
    @apply text-3xl font-bold truncate
  }

</style>