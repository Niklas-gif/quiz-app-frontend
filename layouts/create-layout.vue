<template>
    <div class="content">
        <input class="input" placeholder="Name of your quiz" type="text">
        <input class="input" placeholder="A short description of your quiz." type="text">
        <div>TODO[ADD QUESTION]</div>
        <div>TODO[ADD ANSWER]</div>
        <button @click="submitQuiz">SUBMIT</button>
    </div>

</template>

<script setup lang="ts">
import test_quiz from '~/testdata/fromjsontest';
import type { Quiz } from '~/types/quiz';
const quizData = test_quiz

async function submitQuiz(/*quiz: Quiz*/) {
    console.log(quizData[0])
    try {
        const response = await fetch('http://localhost:3030/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizData[0])
        })
        if (response.ok) {
            console.log(response);
        }
    } catch (error) {
        console.error('Error sending quiz data:', error);
    }
}

</script>

<style scoped>
.content  {
    @apply text-white flex flex-col justify-center items-center bg-gray-700 rounded-xl p-10 sm:m-20 m-5;
  }

.input {
    @apply p-2 m-2  bg-slate-500 rounded-lg
}

</style>