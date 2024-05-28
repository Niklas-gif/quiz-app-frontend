<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 space-x-5">
        <div v-for="question in questions" class="flex flex-col bg-slate-900 rounded-lg p-5 mb-5 space-y-5">
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

</template>

<script setup lang="ts">
import { type Answer } from '../types/answer'
import {type Question} from '../types/question'
import IconTrash from "assets/icons/icon_trash.vue"

const props = defineProps<({
    questions: Question[],
  })>();

  function addQuestions() {
    props.questions.forEach(question => {
        props.questions.push(question)
    })
    //props.questions = []
}

function removeQuestion(questionToRemove: Question) {
    //props.questions = props.questions.filter(question => question !== questionToRemove)
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