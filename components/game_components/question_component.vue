<template>
    <div>
        <h1 class="question_text"> {{description}}</h1>
        <h2 class="text-center text-sky-300" v-show="question.is_multiple_choice"> Multible choice question!</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 pt-5 pb-5">
            <div v-for="(answer) in props.answers" @click="emits('answerSelected',answer)">
                <AnswerComponent 
                    :is-selected="selectedAnswers.includes(answer)" 
                    :description="answer.description" 
                    :is-correct="answer.is_correct"/> 
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

import { defineProps } from 'vue'
import AnswerComponent from './answer_component.vue'
import {type Answer} from '~/types/answer'
import type { Question } from '~/types/question';

const props = defineProps<({
    question: Question,
    description: string,
    answers: Answer[],
    selectedAnswers: Answer[],
  })>();

  const emits = defineEmits(['answerSelected']);

</script>

<style scoped>
.question_text {
    @apply text-center text-xl lg:text-3xl
}
</style>