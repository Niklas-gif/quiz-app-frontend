<template>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
    <body>
      <div class="content">
        <Quiz description="Description" name="Name" :questions="exampleQuestions"></Quiz>
      </div>
    </body>
  </template>
  
  <script>
  import AnswerComponent from '~/components/answer_component.vue'
  import QuestionComponent from '~/components/question_component.vue'
  import QuizComponent from '~/components/quiz_component.vue'
  import test_quiz from '~/types/fromjsontest'

 
  const exampleAnswers = [
    {description:'42 Das ist aber eine verdammt lange Anwort!',is_correct:true},
    {description:'69',is_correct:false},{description:'1337',is_correct:false},
    {description:'420',is_correct:false}
  ]
  const exampleQuestions = [
    {description:"What is the answer to every question?",answers:exampleAnswers}
    ,{description:"Question",answers:exampleAnswers}
    ,{description:"Question",answers:exampleAnswers}
    ,{description:"Question",answers:exampleAnswers}
  ]

  //const exampleQuestions = test_quiz[0] <---- Fromjson
  console.log(test_quiz[0])
  
  export default {
    components: {
      Answer: AnswerComponent,
      Question: QuestionComponent,
      Quiz: QuizComponent
    },
    data() {
    return {
      exampleAnswers: exampleAnswers,
      exampleQuestions: exampleQuestions
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
