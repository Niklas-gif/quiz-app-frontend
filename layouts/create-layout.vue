<template>
    <div class="content">
        <CreateQuizComponent :quiz="newQuiz" :quiz-changed="newQuiz"></CreateQuizComponent>
        <button class="submit-button" @click="submitQuiz(newQuiz)">Submit Changes</button>
    </div>

</template>

<script setup lang="ts">
import { NetworkService } from '~/NetworkService';
import type { Quiz } from '~/types/quiz';
const networkService = new NetworkService(useNuxtApp())
const newQuiz: Ref<Quiz> = ref<Quiz>({
    _id: "",
    name: "",
    description: "",
    questions: []
});

onMounted(()=>{
    if(localStorage.getItem("NewQuiz")) {
        newQuiz.value = localStorage.getItem("NewQuiz") as any
    }
})

function saveQuizToLocalStorage(quiz: Quiz) {
    localStorage.setItem("NewQuiz",JSON.stringify(quiz))
}

async function submitQuiz(quiz: Quiz) {
    try {
       networkService.addQuiz(quiz);
        
    } catch (error) {
        saveQuizToLocalStorage(quiz)
        console.error('Error sending quiz data:', error);
    }
}

</script>

<style scoped>
.content  {
    @apply text-white flex flex-col items-center bg-gray-700 bg-opacity-75 rounded-none py-5 sm:mx-10 lg:mx-32 sm:rounded-b-xl;
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
</style>