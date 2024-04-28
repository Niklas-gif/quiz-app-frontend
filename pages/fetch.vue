<template>
<div>
    {{ dataTwice }}
</div>
</template>

<script setup>

//const dataTwice = await $fetch('https://jsonplaceholder.typicode.com/posts')
const dataTwice = await $fetch('http://localhost:3030/quizzes')
//http://localhost:3030/ping

</script>