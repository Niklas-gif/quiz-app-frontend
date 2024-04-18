<template>
    <div class="answer" :class="{ 'isSelected': is_selected }" @click="toggleSelection">
      {{ description }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from 'vue';
  
  const props = defineProps({
    description: String,
    is_true: Boolean
  });
  let is_selected = ref(false);
  
  function toggleSelection() {
    is_selected.value = !is_selected.value;
    console.log(is_selected.value);
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
    @apply shadow-lg;
  }
  
  .answer.isSelected {
    background-color: rgb(1, 60, 116);
  }
  </style>
  