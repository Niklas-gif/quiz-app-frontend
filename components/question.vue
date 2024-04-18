<template>
    <div>
        <h1 class="text-center"> {{description}}</h1>
        <div class="container flex justify-between">
            <!--<Answer v-for="answer in answers" :answer="answer" />-->
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