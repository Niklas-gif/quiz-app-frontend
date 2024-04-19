<template>
    <div>
        <h1 class="text-center text-3xl"> {{description}}</h1>
        <div class="grid grid-cols-2 gap-1 pt-5 pb-5">
            <div v-for="(answer, index) in answers" :key="index">
                <AnswerComponent :description="answer.description" :is_true="answer.is_true"/> 
            </div>
        </div>
    </div>

</template>

<script script setup lang="ts">

import { defineProps, ref } from 'vue';
import AnswerComponent from './answer_component.vue';
import {type Answer} from '../types/answer';
const props = defineProps({
    description: String,
    answers: Array<Answer>,
  });

</script>