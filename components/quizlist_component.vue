<template> 
<ul>
    <li  v-for="(quiz, index) in props.quizzes" :key="index" @click="toggleDetails(index)" class="item">
         {{quiz.name}}   
        <span v-if="visibleItems[index]" class="flex flex-col">
            {{quiz.description}}        
        </span>
    </li>
</ul>

</template>

<script setup lang="ts">
import {type Quiz } from "../types/quiz"
import { defineProps, ref } from 'vue'

const props = defineProps<({
    quizzes: Array<Quiz>,
  })>()

const visibleItems = ref(Array(props.quizzes.length).fill(false));

function toggleDetails(index: number) {
  visibleItems.value[index] = ! visibleItems.value[index]
}

</script>

<style>
.item {
 @apply text-white bg-orange-600 rounded-3xl p-5 m-5 hover:bg-orange-500 hover:cursor-pointer
}


</style>