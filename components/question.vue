<template>
    <div>
        <h1 class="text-center"> {{description}}</h1>
        <div class="container flex flex-wrap justify-between" v-for="(answer, index) in answers" :key="index">
            <Answer :description="answer" :is_true="true"/> 
        </div>
    </div>

</template>

<script script setup lang="ts">
import { defineProps, ref } from 'vue';
import Answer from './answer.vue';
const props = defineProps({
    description: String,
    answers: Array,
  });

</script>