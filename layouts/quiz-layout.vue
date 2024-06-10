<template>
  <div class="content">
    <div class="flex justify-center">
    <p class="quiz-title">Title: {{ attributes.quiz.name }}</p>
    <p class="quiz-count">Question: {{ index+1 }} from: {{ attributes.quiz.questions.length }}</p>
  </div>
  <div class="game-container">
    <p class="quiz-title" v-if="!gameIsRunning"> GAME OVER!</p>
    <ProgressBar :progress="progress"></ProgressBar>
    <QuestionComponent :selected-answers="selectedAnswers" :answers="currentQuesiton.answers"
      :description="currentQuesiton.description" @answerSelected="selectCard">
    </QuestionComponent>
  </div>
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
const correctQuestions = ref(0)

//gets injected in answer components
provide('revealAnswers', revealAnswers)

const selectedAnswers: Ref<Answer[]> = ref([])
const currentQuesiton: Ref<Question> = ref(attributes.quiz.questions[0])
const progress = ref(100)
const index = ref(0)
const gameIsRunning = ref(true)
const roundIsRunning = ref(true)
let interval: ReturnType<typeof setInterval> 

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
}

onMounted(() => {
  startRound()
})

// If the player does not want to finish the game we stop it.
onBeforeUnmount(() => {
  clearInterval(interval)
  gameIsRunning.value = false
  roundIsRunning.value = false
})

function startRound() {
  revealAnswers.value = false
  interval = setInterval(() => {
    if (progress.value != 0) {
      progress.value -= 1
    } else if (gameIsRunning.value) {
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
    countCorrectAnswers()
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

function countCorrectAnswers() {
  let tmp = correctQuestions.value
  for (const answer of selectedAnswers.value) {
    if(answer.is_correct) {
      correctQuestions.value += 1
    } else {
      correctQuestions.value = tmp
    }
  }
  console.log(`Correct Questions: ${correctQuestions.value}`)
}

</script>

<style scoped>
.quiz-title {
  @apply font-bold text-xl text-sky-300 mx-5 my-2
}

.quiz-count {
  @apply font-bold text-xl text-sky-300 mx-5  my-2
}
.content {
  @apply flex flex-col h-svh text-white bg-gray-700 bg-opacity-75 rounded-b-xl py-5 sm:mx-10 lg:mx-32;
}
.game-container {
  @apply flex flex-col justify-start bg-slate-700 bg-opacity-75 items-center p-5 rounded-xl mx-5 lg:mx-32
}
</style>