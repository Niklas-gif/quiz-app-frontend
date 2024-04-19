<template>
    <div>
        <h1 class="text-center"> {{description}}</h1>
        <div class="grid grid-cols-2 gap-1">
            <div v-for="(answer, index) in answers" :key="index">
                <Answer :description="answer.description" :is_true="answer.is_true"/> 
            </div>
        </div>
    </div>

</template>

<script script setup lang="ts">

import { defineProps, ref } from 'vue';
import Answer from './answer.vue';
const props = defineProps({
    description: String,
    answers: Array  as () => typeof Answer[],
  });

</script>