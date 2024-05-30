<template>
    <div class="content">
        <input class="input m-2" placeholder="Name of your quiz" v-model="newQuiz.name">
        <input class="input m-2" placeholder="A short description of your quiz." v-model="newQuiz.description">
        <AddQuizButton @click="createQuestion"/>
        <div class="grid grid-cols-1 lg:grid-cols-3 space-x-5">
        <div v-for="question in newQuestions" class="flex flex-col bg-slate-900 rounded-lg p-5 mb-5 space-y-5">
            <div class="flex flex-row">
                <input class="input" placeholder="Question description" v-model="question.description">
                <button @click="removeQuestion(question)" class="remove-button">
                    <IconTrash></IconTrash>
                </button>
            </div>
            <div class="flex flex-row space-x-2">
                <label for="isMultipleChoice">Multiple choice question</label>
                <input type="checkbox" id="isMultipleChoice" v-model="question.is_multiple_choice" />
            </div>

            <div v-if="question.answers.length != 0" class="flex flex-col">
                <div v-for="(answer) in question.answers">
                    <div class="flex flex-row">
                        <input class="input" placeholder="Answer" v-model="answer.description">
                        <button class="remove-button" @click="removeAnswer(question,answer)">
                            <IconTrash></IconTrash>
                        </button>
                    </div>
                    <div class="flex flex-row space-x-2">
                        <label for="is_correct">Is true</label>
                        <input type="checkbox" id="is_correct" v-model="answer.is_correct" />
                    </div>
                </div>
            </div>

            <button @click="createAnswer(question)" class="add-answer-button"> New Answer</button>

        </div>
        </div>

        <div v-for="(question, index) in newQuiz?.questions" :key="index" class="flex flex-col">
            <div>Description: {{ question.description }}</div>
            <div>Is multiple choice: {{ question.is_multiple_choice }}</div>
            <div>Answers: {{ question.answers }}</div>
        </div>
        <button class="submit-button" @click="submitQuiz">SUBMIT</button>
    </div>

</template>

<script setup lang="ts">
import type { Quiz } from '~/types/quiz';
import type { Question } from '~/types/question';
import type { Answer } from '~/types/answer';
import IconTrash from "assets/icons/icon_trash.vue"

const attributes= useAttrs() as any
const newQuiz: Ref<Quiz> = ref<Quiz>({
    _id: "",
    name: "",
    description: "",
    questions: []
});
const newQuestions: Ref<Question[]> = ref([])

onMounted(()=>{
    if(attributes.quiz != null) {
        newQuiz.value = attributes.quiz
        newQuestions.value = attributes.quiz.questions
    }
})

function createQuestion() {
    newQuestions.value.push ({
        description: "",
        is_multiple_choice: false,
        answers: [],
    })
}

function addQuestions() {
    newQuestions.value.forEach(question => {
        newQuiz.value.questions.push(question)
    })
    newQuestions.value = []
}

function removeQuestion(questionToRemove: Question) {
    newQuestions.value = newQuestions.value.filter(question => question !== questionToRemove)
}

function createAnswer(question: Question) {
    question.answers.push({
        description: "",
        is_correct: false
    })
}


function removeAnswer(question: Question, answerToRemove: Answer) {
    question.answers = question.answers.filter(answer => answer !== answerToRemove)
}

async function submitQuiz() {
    addQuestions()
    try {
        const token = localStorage.getItem('Bearer')
        const response = await fetch('http://localhost:3030/add', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
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
    @apply p-2  bg-slate-500 rounded-lg w-48 flex-shrink-0
}

.submit-button {
    @apply 
    hover:bg-green-400 
    bg-green-600 border-b-4 
    border-stone-800 
    text-white font-bold 
    p-4 m-5
    rounded-3xl;
}

.remove-button {
    @apply 
    hover:bg-red-400 
    bg-red-600 border-b-4 
    border-stone-800 
    text-white font-bold 
    p-4 m-5
    rounded-full;
}


.add-answer-button {
    @apply 
    hover:bg-blue-400 
    bg-blue-600 border-b-4 
    border-stone-800 
    text-white font-bold 
    p-2 m-2
    rounded-3xl;
}

</style>