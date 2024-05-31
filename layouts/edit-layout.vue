<template>
    <div class="content">
        <CreateQuizComponent :quiz="newQuiz" :quiz-changed="newQuiz"></CreateQuizComponent>
        <button class="submit-button" @click="submitQuiz">Submit Changes</button>
    </div>

</template>

<script setup lang="ts">
import type { Quiz } from '~/types/quiz';

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

async function submitQuiz() {
    try {
        const token = localStorage.getItem('Bearer')
        const response = await fetch('http://localhost:3030/update', {
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
    @apply text-white flex flex-col justify-center items-center bg-gray-700 rounded-xl sm:m-20 m-5;
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