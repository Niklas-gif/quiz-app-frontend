<template>
    <div class="content">
        <input class="input" placeholder="Name of your quiz" type="text">
        <input class="input" placeholder="A short description of your quiz." type="text">
        <div>TODO[ADD QUESTION]</div>
        <div>TODO[ADD ANSWER]</div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.content  {
    @apply text-white flex flex-col justify-center items-center bg-gray-700 rounded-xl p-10 sm:m-20 m-5;
  }

.input {
    @apply p-2 m-2  bg-slate-500 rounded-lg
}

</style>