<template> 
<ul>
    <li  v-for="(quiz) in props.quizzes" @click="toggleDetails" class="item">
         {{quiz.name}}   
        <span v-if="detailIsVisible" class="flex flex-col">
            {{quiz.description}}
        </span>
    </li>
</ul>

</template>

<script setup lang="ts">
import {type Quiz } from "../types/quiz"
import { defineProps, ref } from 'vue'

let detailIsVisible = ref(false)
const props = defineProps<({
    quizzes: Array<Quiz>,
  })>()

  function toggleDetails() {
    detailIsVisible.value = !detailIsVisible.value
  }

</script>

<style>
.item {
 @apply text-white bg-orange-600 rounded-3xl p-5 m-5 hover:bg-orange-500
}


</style>