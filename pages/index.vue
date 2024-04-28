<template>
  <div>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
      <div class="content">
        <PlayButton></PlayButton>
      </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style>
.content {
    color: white;
    margin-left: 100px;
    margin-right: 100px;
    @apply flex flex-col justify-center items-center bg-gray-700 rounded-xl p-10;

  }
</style>