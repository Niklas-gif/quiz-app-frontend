<template>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
    <body>
      <div class="content">
        <Question :answers="questionAnswers" description="What is the answer to every question?"></Question>
        <Question :answers="questionAnswers" description="Bal bla bla bla bla bla bla"></Question>
      </div>
    </body>
  </template>
  
  <script>
  const questionAnswers = [{description:'Das ist aber eine verdammt lange Anwort!',is_true:true},{description:'69',is_true:false},{description:'1337',is_true:false},{description:'420',is_true:false}];
  import AnswerComponent from '~/components/answer_component.vue';
  import QuestionComponent from '~/components/question_component.vue';
  
  export default {
    components: {
      Answer: AnswerComponent,Question: QuestionComponent
    },
    data() {
    return {
      questionAnswers: questionAnswers
    };
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
