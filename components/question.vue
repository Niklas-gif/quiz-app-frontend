<template>
    <div>
        <h1> {{description}}</h1>
        
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