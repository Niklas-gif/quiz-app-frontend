<template>
  <div class="flex flex-row h-svh">
    <Transition :name="transitionName">
      <nav v-if="isVisible" class="list-container">
        <div class="scrollable-list">
          <ul class="list">
            <li v-for="(quiz, index) in currentQuizzes" :key="index" @click="selectQuiz(quiz)" class="item"
              :class="{ 'selected': quiz == selectedQuiz }">
              {{ quiz.name }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col p-5 justify-center">
        </div>
      </nav>
    </Transition>
    <button class="bg-slate-900 bg-opacity-50" @click="toggleVisibility()"><IconForward/></button>
    <DetailComponent :quiz="selectedQuiz"></DetailComponent>
  </div>
</template>


<script setup lang="ts">
import { type Quiz } from "../types/quiz"
import { defineProps, ref } from 'vue'
import IconForward from "~/assets/icons/icon_forward.vue"
import IconBackward from "~/assets/icons/icon_back.vue"

const props = defineProps<({
  quizzes: Array<Quiz>,
})>()

//const visibleItems = ref(Array(props.quizzes.length).fill(false));
const selectedQuiz: Ref<Quiz> = ref(props.quizzes[0])
const currentQuizzes: Ref<Quiz[]> = ref(props.quizzes)
const isVisible = ref(true)

const transitionName = computed(() => isVisible.value ? 'slide-right' : 'slide-left')

//TODO Delete quiz for the current state!!!
/*function toggleDetails(index: number) {
  visibleItems.value[index] = ! visibleItems.value[index]
}*/

function toggleVisibility() {
  isVisible.value = !isVisible.value
}

function selectQuiz(quiz: Quiz) {
  selectedQuiz.value = quiz
}

/*function removeQuizFromList(quizToDelete: Quiz) {
  currentQuizzes.value = currentQuizzes.value.filter(quiz => { quizToDelete == quiz })
}*/

async function deleteQuiz(quiz: Quiz) {
  try {
    const token = localStorage.getItem('Bearer')
    const response = await fetch('http://localhost:3030/delete', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quiz)
    })
    if (response.ok) {
      console.log(response);
      //removeQuizFromList(selectedQuiz.value)
      selectedQuiz.value = currentQuizzes.value[0]
    }
  } catch (error) {
    console.error('Error sending quiz data:', error);
  }
}

</script>

<style scoped>
.quiz-heading {
  @apply text-3xl text-sky-300 font-bold truncate;
}

.list-container {
  @apply flex flex-row bg-slate-900 bg-opacity-50 rounded-bl-xl sm:max-w-72 max-w-32 truncate;
}

.scrollable-list {
  @apply overflow-y-auto max-h-screen;
}

.list {
  @apply sm:m-5;
}

.item {
  @apply p-2 text-white hover:text-sky-400 border-l-sky-700 hover:border-l-sky-300 border-l-2 hover:cursor-pointer;
}

.item.selected {
  @apply text-sky-400 border-l-sky-400;
}

.info-container {
  @apply flex pb-10 space-y-2 w-fit max-w-36 min-w-36;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
