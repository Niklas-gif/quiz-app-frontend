<template>
    <div class="block">
        <div v-for="(question, index) in questions" :key="index">
            <QuestionComponent :description="question.description" :answers="question.answers"/> 
        </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps, ref } from 'vue'

import QuestionComponent from './question_component.vue'

import {type Answer} from '../types/answer'
import {type Question} from '../types/question'
import {type Quiz} from '../types/quiz'

const props = defineProps<({
    description: String,
    name: String,
    questions: Array<Question>,
  })>()


</script>