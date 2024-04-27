<template>
    <div class="block">
        <div v-for="(question, index) in props.questions" :key="index">
            <QuestionComponent :selected-answers="selectedAnswers"  :answers="question.answers" :description="question.description"></QuestionComponent>
        </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'
import {type Question} from '../types/question'
import type { Answer } from '~/types/answer';

const props = defineProps<({
    description: String,
    name: String,
    questions: Array<Question>,
  })>()

  let selectedAnswers: Ref<Answer[]> = ref([])


</script>