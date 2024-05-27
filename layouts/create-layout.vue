<template>
    <div class="content">
        <input class="input m-2" placeholder="Name of your quiz" v-model="newQuiz.name">
        <input class="input m-2" placeholder="A short description of your quiz." v-model="newQuiz.description">
        <AddQuizButton @click="createQuestion"/>
        <div v-if="newQuestion != null" class="flex flex-col bg-slate-900 rounded-lg p-5 space-y-5">
            <input class="input" placeholder="Question description" v-model="newQuestion.description">
            <div class="flex flex-row space-x-2">
                <label for="isMultipleChoice">Multiple choice question</label>
                <input type="checkbox" id="isMultipleChoice" v-model="newQuestion.is_multiple_choice" />
            </div>
            <button @click="createAnswer" class="add-answer-button"> New Answer</button>

            <div v-if="newAnswers?.length != 0" class="flex flex-col">
                <div v-for="(answer) in newAnswers">
                    <input class="input" placeholder="Answer" v-model="answer.description">
                    <div class="flex flex-row space-x-2">
                        <label for="is_correct">Is true</label>
                        <input type="checkbox" id="is_correct" v-model="answer.is_correct" />
                        <button class="remove-button" @click="removeAnswer(answer)">Remove answer</button>
                    </div>
                </div>
            </div>
            <div v-else> IST NULL {{ newAnswers }}</div>

            <button @click="addQuestion" class="submit-button"> Add question </button>
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

const newQuiz: Ref<Quiz> = ref<Quiz>({
    _id: "",
    name: "",
    description: "",
    questions: []
});

const newAnswers: Ref<Answer[]> = ref([])

const newQuestion: Ref<Question | null> = ref(null)

function createQuestion() {
    newQuestion.value = {
        description: "",
        is_multiple_choice: false,
        answers: [],
    }
}

function addQuestion() {
    addAnswer()
    newQuiz.value?.questions.push(newQuestion.value!)
    newQuestion.value = null
    newAnswers.value = []
}

function createAnswer() {
    newAnswers.value?.push({
        description: "",
        is_correct: false
    })
}

function addAnswer() {
    newAnswers.value.forEach(answer => {
        newQuestion.value!.answers.push(answer);
    });
}

function removeAnswer(answerToRemove: Answer) {
    newAnswers.value = newAnswers.value.filter(answer => answer !== answerToRemove)
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
    @apply p-2  bg-slate-500 rounded-lg
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
    rounded-3xl;
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