<template>
  <div>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
      <div class="content">
        <QuizListComponent :quizzes="exampleQuiz"></QuizListComponent>
        <div class="flex flex-col p-5">
          <PlayButton class="self-center"></PlayButton>
          <p> Play now!</p>
        </div>
        <div class="flex flex-col p-5">
          <CreateButton class="self-center"></CreateButton>
          <p> Create Quiz!</p>
        </div>
      </div>
  </div>

</template>

<script setup lang="ts">
 import QuizListComponent from '~/components/quizlist_component.vue'
import type { Quiz } from '~/types/quiz';

/*const dataTwice = await fetch('http://localhost:3030/quizzes')
let data = await dataTwice.json()
let exampleQuiz :Quiz[] = data*/
let exampleQuiz :Ref<Quiz[]> = ref([])


const dataTwice = await fetch('http://localhost:3030/quizzes')
let data = await dataTwice.json()
exampleQuiz.value = data
/*onMounted(async ()=>{

})*/
 

</script>

<style scoped>
.content  {
    color: white;
    margin-left: 100px;
    margin-right: 100px;
    @apply flex flex-row justify-center items-center bg-gray-700 rounded-xl p-10;
  }

</style>