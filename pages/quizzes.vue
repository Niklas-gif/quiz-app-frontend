<template>
        <div class="content">
          <NuxtLink to="/" class="p-5 hover:text-purple-400">Go back to main</NuxtLink>
          <ProgressBar></ProgressBar>
            <QuestionComponent 
              :selected-answers="selectedAnswers" 
              :answers="currentQuesiton.answers" 
              :description="currentQuesiton.description" 
              @answerSelected="selectCard">
          </QuestionComponent>
          <button @click="nextQuestion"> next question </button>
        </div>

</template>

<script setup lang="ts">
  import QuestionComponent from '~/components/question_component.vue'
  import ProgressBar from '~/components/progress_bar.vue'
  import testQuiz from '~/testdata/fromjsontest'

  import { type Answer } from '~/types/answer'
  import { defineProps } from 'vue'
  import type { Quiz } from '~/types/quiz'
  
  const router = useRouter()
  const props = defineProps<({
    quiz: Quiz,
  })>();
  
  let selectedAnswers: Ref<Answer[]> = ref([])
  let currentQuesiton = ref(testQuiz[0].questions[0])
  let index = ref(0)

  function selectCard(answer: Answer) {
    //TODO check if question is multipblechoice
    if(selectedAnswers.value.includes(answer)) {
      selectedAnswers.value.splice(selectedAnswers.value.indexOf(answer), 1) 
    } else {
      selectedAnswers.value.push(answer)

      setTimeout(() => {
      if(selectedAnswers.value.length != 0) { 
        submitAnswer(answer)
      }
     },1000)
    }
      
  }


  function submitAnswer(answer: Answer) {
    if(answer.is_correct) {
      nextQuestion()
      selectedAnswers.value = []
    }
  }

  function nextQuestion() {
    if(index.value + 1 < testQuiz[0].questions.length) {
      currentQuesiton.value = testQuiz[0].questions[index.value += 1]
    }
  }


</script>

<style scoped>
.content {
  @apply flex flex-col justify-center items-center text-white bg-gray-700 rounded-xl p-5 lg:m-20 m-5;
}
</style>