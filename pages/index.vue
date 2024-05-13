<template>
  <div>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
      <div class="content">
      <IconLoading v-if="isLoading"></IconLoading>
       <QuizListComponent v-else :quizzes="data"></QuizListComponent>
        <div class="flex flex-col p-5">
          <PlayButton class="self-center"></PlayButton>
          <p> Play now!</p>
        </div>
        <button @click="toggletest">click</button>
        <NuxtLayout v-if="test" :name="layout">
          <NuxtPage />
        </NuxtLayout>
        <div class="flex flex-col p-5">
          <CreateButton class="self-center"></CreateButton>
          <p> Create Quiz!</p>
        </div>
        <NuxtLink :to="`/quizzes/${data[0]}`">Test</NuxtLink>
      </div>
  </div>

</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import QuizListComponent from '~/components/quizlist_component.vue'
  import IconLoading from "assets/icons/icon_loading.vue"
  import  QuizComponent  from '~/components/quiz_component.vue'
  import type { NuxtLink } from '#build/components';

  const layout = 'quiz-layout'
  const router = useRouter()
  const data  = ref([])
  const isLoading  = ref(true)
  const test = ref(false)

  function toggletest() {
    test.value = !test.value
  }
  //router.addRoute({name: 'quizzes',path:'/quizzes',component: QuizComponent})

  onMounted(async () => {
    isLoading.value = true
    try {
      const response = await fetch('http://localhost:3030/quizzes')
      data.value = await response.json()
    } catch(error) {
      console.log(error)
    }
    isLoading.value = false
  })

</script>

<style scoped>
.content  {
    @apply text-white flex flex-row justify-center items-center bg-gray-700 rounded-xl p-10 sm:m-20 m-5;
  }

</style>