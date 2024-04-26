<template>
    <div class="block">
        <div v-for="(question, index) in questions" :key="index">

        </div>
    </div>
</template>

<script setup lang="ts">

import { defineProps, ref } from 'vue'

import {type Question} from '../types/question'

const props = defineProps<({
    description: String,
    name: String,
    questions: Array<Question>,
  })>()


</script>