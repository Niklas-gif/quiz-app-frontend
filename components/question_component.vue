<template>
    <div>
        <h1 class="text-center text-3xl"> {{description}}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 pt-5 pb-5">
            <div v-for="(answer) in props.answers" @click="emits('answerSelected',answer)">
                <AnswerComponent :is_selected= "selected_cards.includes(answer)" :description="answer.description" :is_correct="answer.is_correct"/> 
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

import { defineProps, ref } from 'vue'
import AnswerComponent from './answer_component.vue'
import {type Answer} from '../types/answer'

const props = defineProps<({
    description: String,
    answers: Array<Answer>,
    selected_cards: Array<Answer>
  })>();

  
  const emits = defineEmits(['answerSelected']);

</script>