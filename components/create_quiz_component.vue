<template>
    <div class="container">
        <input class="input m-2" placeholder="Name of your quiz" v-model="newQuiz.name">
        <input class="input m-2" placeholder="A short description of your quiz." v-model="newQuiz.description">
        <AddQuizButton @click="createQuestion"/>
        <div class="grid grid-cols-1 lg:grid-cols-3 lg:space-x-5">
        <div v-for="question in newQuestions" class="question-box">
            <div class="flex flex-row">
                <input class="input-container" placeholder="Question description" v-model="question.description">
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
                        <input class="input-container" placeholder="Answer" v-model="answer.description">
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
    </div>
</template>

<script setup lang="ts">
import type { Quiz } from '~/types/quiz';
import { type Answer } from '../types/answer'
import {type Question} from '../types/question'
import IconTrash from "assets/icons/icon_trash.vue"
import { ToastService } from '~/ToastService';
const toastService = new ToastService()

const props = defineProps<({
    quiz: Quiz,
  })>();

  const newQuiz: Ref<Quiz> = ref<Quiz>({
    _id: "",
    name: "",
    description: "",
    questions: []
});

const emits = defineEmits(['quizChanged'])
const newQuestions: Ref<Question[]> = ref([])

onMounted(()=>{
  if(props.quiz != null && props.quiz.questions != null) {
      newQuiz.value = props.quiz
      newQuestions.value = props.quiz.questions
  } else {
      console.log("Props failed")
  }
})

function createQuestion() {
    newQuestions.value.push ({
        description: "",
        is_multiple_choice: false,
        answers: [],
    })
}

function removeQuestion(questionToRemove: Question) {
    newQuestions.value = newQuestions.value.filter(question => question !== questionToRemove)
    newQuiz.value.questions = newQuestions.value
}

function createAnswer(question: Question) {
    if(question.answers.length < 4) {
        question.answers.push({
             description: "",
             is_correct: false
        })
    } else {
        toastService.error("Each question can only have 4 answers at max!")
    }
}

function removeAnswer(question: Question, answerToRemove: Answer) {
    question.answers = question.answers.filter(answer => answer !== answerToRemove)
}

</script>

<style scoped>
.container  {
    @apply text-white flex flex-col justify-center items-center sm:m-20 ;
  }

.input {
    @apply p-2 bg-slate-500 rounded-lg ;
}

.input-container {
    @apply p-2 bg-slate-500 rounded-lg w-full h-auto;
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
    bg-red-600
    border-b-4 
    border-stone-800 
    text-white font-bold 
    p-4 
    m-2
    rounded-3xl;
}


.add-answer-button {
    @apply 
    hover:bg-blue-400 
    bg-blue-600 border-b-4 
    border-stone-800 
    text-white font-bold 
    p-2 m-0
    rounded-3xl;
}

.question-box {
    @apply flex flex-col bg-slate-900 rounded-lg p-3 mb-5  space-y-3;
}

</style>