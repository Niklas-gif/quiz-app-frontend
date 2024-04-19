<template>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
    <div class="content">
        <Question :answers="questionAnswers" description="What is the answer to every question?"></Question>
    </div>
  </template>
  
  <script>
  const questionAnswers = [{description:'42',is_true:true},{description:'69',is_true:false},{description:'1337',is_true:false},{description:'420',is_true:false}];
  import Answer from '~/components/answer.vue';
  import Question from '~/components/question.vue';
  
  export default {
    components: {
      Answer,Question
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
    @apply flex justify-center items-center bg-gray-700 rounded-xl;

  }
</style>
