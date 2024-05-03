<template>
    <li  v-for="(quiz, index) in props.quizzes">
        {{quiz.description}}
    </li>

</template>

<script setup lang="ts">
import {type Quiz } from "../types/quiz"
import { defineProps ,ref } from 'vue'

const props = defineProps<({
    quizzes: Array<Quiz>,
  })>()



</script>

<style>


</style>