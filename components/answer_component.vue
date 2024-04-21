<template>
    <div class="answer" :class="{ 'isSelected': is_selected }" @click="reveal">
      <p>{{ display_text }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from 'vue'
  
  const props = defineProps({
    description: String,
    is_correct: Boolean
  });

  let is_selected = ref(false)
  let display_text = ref(props.description)

  function toggleSelection() {
    is_selected.value = !is_selected.value
    console.log(is_selected.value)
  }

  function reveal() {
     if(props.is_correct === true) {
        display_text.value = "True"
     } else {
        display_text.value = "False"
     }
     toggleSelection()
  }
  </script>
  
  <style scoped>
  .answer {
    width: 360px;
    height: 120px;
    background-color: rgb(0, 132, 255);
    color: white;
    justify-items: center;
    align-items: center;
    text-align: center;
    display: grid;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    cursor: pointer;
    @apply break-words shadow-lg bg-blue-500 hover:bg-blue-300 border-b-4 border-blue-700 hover:animate-pulse;
  }
  
  .answer.isSelected {
    background-color: rgb(1, 60, 116);
    @apply border-0 animate-pulse;
  }
  </style>
  