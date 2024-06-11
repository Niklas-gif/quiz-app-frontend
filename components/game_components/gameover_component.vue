<template>
    <div>
        <p> {{props.correctQuestions}} out of {{questions.length}} are Correct </p>
        <NuxtLink to="/">
            <p>go back</p>
        </NuxtLink>
    </div>
    
</template>

<script setup lang="ts">
import type { Question } from '~/types/question';


const props = defineProps<({
    correctQuestions: number,
    questions: Question[]
  })>()

</script>

<style scoped>

</style>