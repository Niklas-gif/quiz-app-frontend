<template>
  <div class="content">
    <p v-if="!gameIsRunning"> GAME OVER!</p>
    <p>{{ attributes.quiz.name }}</p>
    <p>{{ attributes.quiz.id }}</p>
    <NuxtLink to="/" class="p-5 hover:text-purple-400">Go back to main</NuxtLink>
    <ProgressBar :progress="progress"></ProgressBar>
    <QuestionComponent :selected-answers="selectedAnswers" :answers="currentQuesiton.answers"
      :description="currentQuesiton.description" @answerSelected="selectCard">
    </QuestionComponent>
    <button @click="nextQuestion"> next question </button>
  </div>

</template>

<script setup lang="ts">
import QuestionComponent from '~/components/question_component.vue'
import ProgressBar from '~/components/progress_bar.vue'
import { type Answer } from '~/types/answer'
import { type Question } from '~/types/question'

const attributes = useAttrs() as any
const emits = defineEmits(['reset'])

const selectedAnswers: Ref<Answer[]> = ref([])
const currentQuesiton: Ref<Question> = ref(attributes.quiz.questions[0])
const progress = ref(100)
const index = ref(0)
const gameIsRunning = ref(true)

function selectCard(answer: Answer) {
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

function startRound() {
  const interval = setInterval(() => {
    if (progress.value != 0) {
      progress.value -= 1
    } else if(gameIsRunning.value) {
      submitAnswer()
      clearInterval(interval)
    }
  }, 100)
}

function submitAnswer() {
  //We wait for 5 seconds after the round has ended!
  if (gameIsRunning.value) {
    setTimeout(() => {
      selectedAnswers.value = []
      nextQuestion()
    }, 5000)
  }
}

function revealAnswers() {

}

function nextQuestion() {
  if (index.value + 1 < attributes.quiz.questions.length) {
    currentQuesiton.value = attributes.quiz.questions[index.value += 1]
    progress.value = 100
    startRound()
  } else {
    gameIsRunning.value = false;
    console.log("Gameover")
  }
}

</script>

<style scoped>
.content {
  @apply flex flex-col justify-center items-center text-white bg-gray-700 rounded-xl p-5 lg:m-20 m-5;
}
</style>