<template>
    <body>
        <div class="content">
          <QuestionComponent :selected-answers="selectedAnswers" :answers="currentQuesiton.answers" :description="currentQuesiton.description" @answerSelected="selectCard"></QuestionComponent>
          <button @click="nextQuestion"> next question </button>
        </div>
    </body>

</template>

<script setup lang="ts">
  import QuestionComponent from '~/components/question_component.vue'
  import testQuiz from '~/testdata/fromjsontest'

  import { type Answer } from '~/types/answer'

  let selectedAnswers: Ref<Answer[]> = ref([])
  let currentQuesiton = ref(testQuiz[0].questions[0])
  let selectedAnswer: boolean | null = null
  let index = ref(0)

  function selectCard(answer: Answer) {
    //TODO check if question is multipblechoice
    if(selectedAnswers.value.includes(answer)) {
      selectedAnswers.value.splice(selectedAnswers.value.indexOf(answer), 1) 
    } else {
      selectedAnswers.value.push(answer)
    }
    //submitAnswer(answer)
  }

  function submitAnswer(answer: Answer) {
    selectedAnswer = answer.isCorrect
    if(selectedAnswer) {
      nextQuestion()
      selectedAnswers.value.pop()
    }
  }

  function nextQuestion() {
    if(index.value < testQuiz[0].questions.length) {
      currentQuesiton.value = testQuiz[0].questions[index.value += 1]
    }
  }


</script>

<style>
.content  {
  color: white;
  margin-left: 100px;
  margin-right: 100px;
  @apply flex flex-col justify-center items-center bg-gray-700 rounded-xl p-10;
}
</style>