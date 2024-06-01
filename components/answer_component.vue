<template>

  <div v-if="isRevealed">
    <div v-if="isCorrect">
      <div class="answer isCorrect">
        <p class="md:break-all">{{ props.description }}</p>
      </div>
    </div>
    <div v-else>
      <div class="answer isFalse">
        <p class="md:break-all">{{ props.description }}</p>
      </div>
    </div>
  </div>
  <div v-else class="answer" :class="{ 'isSelected': props.isSelected}">
    <p class="md:break-all">{{ props.description }}</p>
  </div>
</template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  const props = defineProps<({
    description: string,
    isCorrect: boolean,
    isSelected: boolean,
  })>();

  //provided by quiz-layout
  const isRevealed = inject('revealAnswers')


  </script>
  
  <style scoped>
  .answer {
    @apply 
    max-w-[360px]
    max-h-[120px]
    min-w-36
    min-h-24
    grid
    text-center
    items-center
    justify-center
    rounded-3xl
    p-2 m-2 
    cursor-pointer 
  text-white 
    break-words
    shadow-lg
    bg-blue-500
    hover:bg-blue-300
    border-b-4
    border-blue-700
    hover:animate-pulse;
  }
  
  .answer.isSelected {
    @apply bg-cyan-900 border-0 animate-pulse;
  }

  .answer.isCorrect {
    @apply bg-green-400 border-0 animate-pulse;
  }
  
  .answer.isFalse {
    @apply bg-red-500 border-0 animate-pulse;
  }
  </style>
  