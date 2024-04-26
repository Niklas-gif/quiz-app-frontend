<template>
    <div class="answer" :class="{ 'isSelected': props.isSelected }">
      <p>{{ props.description }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from 'vue'
  
  const props = defineProps<({
    description: String,
    isCorrect: boolean,
    isSelected: boolean
  })>();

  </script>
  
  <style scoped>
  .answer {
    width: 360px;
    height: 120px;
    @apply 
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
  </style>
  