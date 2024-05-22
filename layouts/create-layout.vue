<template>
    <div class="content">
        <input class="input" placeholder="Name of your quiz" v-model="newQuiz.name">
        <input class="input" placeholder="A short description of your quiz." v-model="newQuiz.description">
        <AddQuizButton @click="createQuestion"></AddQuizButton>
        <div v-if="newQuestion != null" class="flex flex-col bg-slate-900 rounded-lg">
            <input class="input" placeholder="Name of your quiz" v-model="newQuestion.description">
            <button @click="addAnswer"> Add Answer</button>
            <button> Toggle </button>
            <button @click="addQuestion"> Submit </button>
        </div>
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
const newQuiz: Ref<Quiz> = ref<Quiz>({
    _id: "",
    name: "",
    description: "",
    questions: []
});

const newQuestion: Ref<Question | null> = ref(null)

function createQuestion() {
    newQuestion.value = {
        description: "",
        is_multiple_choice: false,
        answers: [],
    }
}

function addQuestion() {
    newQuiz.value?.questions.push(newQuestion.value!)
    newQuestion.value = null
}

function addAnswer() {
    newQuestion.value!.answers =  [
        {description:"Antwort 1",is_correct: false},
    {description:"Antwort 1",is_correct: false},
    {description:"Antwort 3 ist Richtig",is_correct: true},
]

}

async function submitQuiz(/*quiz: Quiz*/) {
    console.log(newQuiz)
    try {
        const response = await fetch('http://localhost:3030/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuiz.value)
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