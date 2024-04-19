<template>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
    <body>
      <div class="content">
        <Question :answers="exampleAnswers" description="What is the answer to every question?"></Question>
        <Question :answers="exampleAnswers" description="Bal bla bla bla bla bla bla"></Question>
        <Quiz description="Quiz1" :questions="exampleQuestions"></Quiz>
      </div>
    </body>
  </template>
  
  <script>
  const exampleAnswers = [
    {description:'Das ist aber eine verdammt lange Anwort!',is_true:true},
    {description:'69',is_true:false},{description:'1337',is_true:false},
    {description:'420',is_true:false}
  ]
  const exampleQuestions = [
    {description:"Question",answers:exampleAnswers}
    ,{description:"Question",answers:exampleAnswers}
    ,{description:"Question",answers:exampleAnswers}
    ,{description:"Question",answers:exampleAnswers}
  ]

  import AnswerComponent from '~/components/answer_component.vue'
  import QuestionComponent from '~/components/question_component.vue'
  import QuizComponent from '~/components/quiz_component.vue'
  
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
