<template>
    <NuxtLink to="/create" class="fab-button" title="Create your own new Quiz!">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="icon"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </NuxtLink>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .fab-button {
    @apply bg-sky-600 hover:bg-sky-400 m-5 bottom-6 right-6 lg:right-32 lg:w-24 lg:h-24 h-24 w-24;
    position: fixed;
    color: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .icon {
    width: 24px;
    height: 24px;
  }
  </style>