<template>
    <NuxtLink to="/create" class="fab-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="icon"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      <p class="font-bold px-5 text-sm">New quiz</p>
    </NuxtLink>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .fab-button {
    /*@apply bottom-10 lg:right-32;*/
    position: fixed;
    bottom: 32px;
    right: 128px;
    background-color: #5900be;
    color: white;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .fab-button:hover {
    background-color: #8c00ff;
  }
  
  .icon {
    width: 24px;
    height: 24px;
  }
  </style>