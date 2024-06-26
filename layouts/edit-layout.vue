<template>
    <div class="content">
        <CreateQuizComponent :quiz="newQuiz" :quiz-changed="newQuiz"></CreateQuizComponent>
        <button class="submit-button" @click="submitQuiz(newQuiz)">Submit Changes</button>
    </div>
</template>

<script setup lang="ts">
import { NetworkService } from '~/NetworkService'
import { ToastService } from '~/ToastService'
import type { Quiz } from '~/types/quiz'
const networkService = new NetworkService(useNuxtApp())
const toastService = new ToastService()

const attributes= useAttrs() as any
const newQuiz: Ref<Quiz> = ref<Quiz>({
    _id: "",
    name: "",
    description: "",
    questions: []
});

onBeforeMount(()=>{
    if(attributes.quiz != null) {
        newQuiz.value = attributes.quiz
    }
})

function submitQuiz(quiz: Quiz) {
    if (validateQuiz()) {
        try {
            networkService.updateQuiz(quiz)
        } catch (error) {
            console.error('Error sending quiz data:', error);
        }
    }
}

function validateQuiz() {
    const questions = newQuiz.value.questions 
    if(questions.length == 0) {
        toastService.warning("Your quiz must have at least one question!")
        return false
    }
    for (const question of questions) {
        if (question.answers.length == 0) {
            toastService.warning("Every question must have at least one answer!")
            return false
        }

        if (!question.answers.some(answer => answer.is_correct)) {

            toastService.warning("At least one answer needs to be true for every question!")
            return false
        }
    }
    return true
}

</script>

<style scoped>
.content  {
    @apply text-white flex flex-col  items-center bg-gray-700 bg-opacity-75 rounded-none py-5 sm:mx-10 lg:mx-32 sm:rounded-b-xl;
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