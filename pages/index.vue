<template>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
    <body>
      <div class="content">
        <Quiz :description="exampleQuiz.description" :name="exampleQuiz.name" :questions="exampleQuiz.questions"></Quiz> 
      </div>
    </body>
  </template>
  
  <script>
  import AnswerComponent from '~/components/answer_component.vue'
  import QuestionComponent from '~/components/question_component.vue'
  import QuizComponent from '~/components/quiz_component.vue'
  import test_quiz from '~/testdata/fromjsontest'

  const exampleQuiz = test_quiz[0]
  
  export default {
    components: {
      Answer: AnswerComponent,
      Question: QuestionComponent,
      Quiz: QuizComponent
    },

    data() {
    return {
      exampleQuiz: exampleQuiz
    }
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
