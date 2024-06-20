<template>
    <div class="flex flex-row items-center space-x-4">
      <div class="box" @click="toggleVisibility">
        <IconQuestionmark class="icon"/>
      </div>
      <span v-show="isVisible" class="rules-box">
        <p class="font-semibold text-lg mb-2">Rules for creating a Quiz:</p>
        <ul class="list-disc list-inside space-y-1">
          <li>You have to be signed in to create or edit a quiz.</li>
          <li>Every question has to have at least one correct answer.</li>
          <li>Every question can't have more than 4 answers.</li>
          <li>The name of the quiz has to be unique.</li>
        </ul>
      </span>
    </div>
  </template>
  
  <script setup>
  import IconQuestionmark from 'assets/icons/icon_questionmark.vue';
  
  const isVisible = ref(false)
  
  function toggleVisibility() {
    isVisible.value = !isVisible.value
  }
  </script>
  
  <style scoped>
  .box {
    @apply flex items-center justify-center bg-sky-600 hover:bg-sky-400 m-5 rounded-full p-5 cursor-pointer;
  }
  
  .icon {
    width: 24px;
    height: 24px;
  }
  
  .rules-box {
    @apply bg-gray-700 p-4 rounded-lg shadow-lg;
  }
  
  .rules-box p {
    @apply text-sky-300;
  }
  
  .rules-box ul {
    @apply text-sky-400;
  }
  </style>
  