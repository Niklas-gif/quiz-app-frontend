<template> 
<ul>
    <li  v-for="(quiz) in props.quizzes" @click="toggleDetails">
         {{quiz.name}}   
        <span v-if="detailIsVisible">
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


</style>