<template>
  <div class="content">
    <p v-if="!isRunning"> GAME OVER!</p>
    <p>{{ attributes.quiz.name }}</p>
    <p>{{ attributes.quiz.id }}</p>
    <NuxtLink to="/" class="p-5 hover:text-purple-400">Go back to main</NuxtLink>
    <ProgressBar></ProgressBar>
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

let selectedAnswers: Ref<Answer[]> = ref([])
let currentQuesiton: Ref<Question> = ref(attributes.quiz.questions[0])
let index = ref(0)
let isRunning = ref(true)

function selectCard(answer: Answer) {
  if (selectedAnswers.value.includes(answer)) {
    selectedAnswers.value.splice(selectedAnswers.value.indexOf(answer), 1)
  } else {

    if (!currentQuesiton.value.is_multiple_choice && selectedAnswers.value.length == 1) {
      return
    }
    selectedAnswers.value.push(answer)
    setTimeout(() => {
      if (selectedAnswers.value.length != 0) {
        submitAnswer(answer)
      }
    }, 1000)
  }

}

function submitAnswer(answer: Answer) {

  if(answer.is_correct && !currentQuesiton.value.is_multiple_choice) {
    nextQuestion()
    selectedAnswers.value = []
    return
  }

  if(currentQuesiton.value.is_multiple_choice) {
    let i = 0
    selectedAnswers.value.forEach(answer => {
      if(answer.is_correct) {
        i++
      }
      console.log(i,"out of",currentQuesiton.value.answers.length,"are correct!")
    });
  }
}

function nextQuestion() {
  if (index.value + 1 < attributes.quiz.questions.length) {
    currentQuesiton.value = attributes.quiz.questions[index.value += 1]
  } else {
    isRunning.value = false;
  }
}

</script>

<style scoped>
.content {
  @apply flex flex-col justify-center items-center text-white bg-gray-700 rounded-xl p-5 lg:m-20 m-5;
}
</style>