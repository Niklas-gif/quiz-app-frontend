<template>
    <header class="content-center text-white text-center text-6xl">
        <h1 class="pt-5 pb-5">Welcome to Quiz World!</h1>
    </header>
    <div class="content">
        <Question :answers="questionAnswers" description="What is the answer to every question?"></Question>
    </div>
  </template>
  
  <script>
  const questionAnswers = ['Red', 'Blue', 'Green', 'Yellow'];
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
