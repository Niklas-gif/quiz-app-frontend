<template>
  <div class="content">
    <p v-if="!gameIsRunning"> GAME OVER!</p>
    <p>{{ attributes.quiz.name }}</p>
    <p>Question {{ index+1 }} from {{ attributes.quiz.questions.length }}</p>
    <ProgressBar :progress="progress"></ProgressBar>
    <QuestionComponent :selected-answers="selectedAnswers" :answers="currentQuesiton.answers"
      :description="currentQuesiton.description" @answerSelected="selectCard">
    </QuestionComponent>
  </div>

</template>

<script setup lang="ts">
import QuestionComponent from '~/components/question_component.vue'
import ProgressBar from '~/components/progress_bar.vue'
import { type Answer } from '~/types/answer'
import { type Question } from '~/types/question'
import { provide } from 'vue';

const attributes = useAttrs() as any
const revealAnswers = ref(false)

//gets injected in answer components
provide('revealAnswers', revealAnswers)

const selectedAnswers: Ref<Answer[]> = ref([])
const currentQuesiton: Ref<Question> = ref(attributes.quiz.questions[0])
const progress = ref(100)
const index = ref(0)
const gameIsRunning = ref(true)
const roundIsRunning = ref(true)

function selectCard(answer: Answer) {
  if (!roundIsRunning.value) {
    return
  }

  if (selectedAnswers.value.includes(answer)) {
    selectedAnswers.value.splice(selectedAnswers.value.indexOf(answer), 1)
  } else {

    if (!currentQuesiton.value.is_multiple_choice && selectedAnswers.value.length == 1) {
      return
    }
    selectedAnswers.value.push(answer)
  }
  console.log(selectedAnswers.value)
}

onMounted(() => {
  startRound()
})

function startRound() {
  revealAnswers.value = false
  const interval = setInterval(() => {
    if (progress.value != 0) {
      progress.value -= 1
    } else if(gameIsRunning.value) {
      roundIsRunning.value = false
      submitAnswer()
      clearInterval(interval)
    }
  }, 100)
}

function submitAnswer() {
  //We wait for 5 seconds after the round has ended!
  if (gameIsRunning.value) {
    revealAnswers.value = true
    setTimeout(() => {
      selectedAnswers.value = []
      nextQuestion()
    }, 5000)
  }
}

function nextQuestion() {
  if (index.value + 1 < attributes.quiz.questions.length) {
    currentQuesiton.value = attributes.quiz.questions[index.value += 1]
    progress.value = 100
    roundIsRunning.value = true
    startRound()
  } else {
    gameIsRunning.value = false
    console.log("Gameover")
  }
}

</script>

<style scoped>
.content {
  @apply flex flex-col h-svh justify-center items-center text-white bg-gray-700 bg-opacity-75 rounded-b-xl py-5 sm:mx-10 lg:mx-32;
}
</style>