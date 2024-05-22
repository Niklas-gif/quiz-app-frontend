<template>
    <div class="content">
        <input class="input" placeholder="Name of your quiz" type="text">
        <input class="input" placeholder="A short description of your quiz." type="text">
        <AddQuizButton @click="addQuestion"></AddQuizButton>
        <div v-for="(question, index) in newQuiz?.questions" :key="index">
            <div>{{ question }}</div>
        </div>
        <button @click="submitQuiz">SUBMIT Test Quiz</button>
    </div>

</template>

<script setup lang="ts">
import test_quiz from '~/testdata/fromjsontest';
import type { Quiz } from '~/types/quiz';
import type { Question } from '~/types/question';
import type { Answer } from '~/types/answer';
const testQuiz = test_quiz
const newQuiz: Ref<Quiz | null> = ref(null)

onMounted(()=>{
    newQuiz.value = {
        _id: "",
        name:"",
        description:"",
        questions: []
}
})

function addQuestion() {
    const test: Question = {
        description: "Das ist die Beschreibung",
        is_multiple_choice: false,
        answers:[
            {description: "Antwort_2",is_correct: false},
            {description: "Antwort_2",is_correct: false},
            {description: "Antwort_2",is_correct: false}]
        }
    newQuiz.value?.questions.push(test)
}

async function submitQuiz(/*quiz: Quiz*/) {
    console.log(testQuiz[0])
    try {
        const response = await fetch('http://localhost:3030/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testQuiz[0])
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