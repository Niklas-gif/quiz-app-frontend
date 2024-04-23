<template>
    <body>
        <div class="content">
          <QuestionComponent :answers="currentQuesiton.answers" :description="currentQuesiton.description" @answer-selected="login_answer"></QuestionComponent>
        </div>
    </body>

</template>

<script setup lang="ts">
  import QuizComponent from '~/components/quiz_component.vue' 
  import QuestionComponent from '~/components/question_component.vue';
  import test_quiz from '~/testdata/fromjsontest'

  import { type Answer } from '~/types/answer';

  let currentQuesiton = test_quiz[0].questions[0]
  let selectedAnswer: boolean | null = null

  function login_answer(answer: Answer) {
    selectedAnswer =  answer.is_correct

    //next_quesiton()
  }

  function next_quesiton() {
    //TODO Timer!
    if(selectedAnswer == true) {
      currentQuesiton = test_quiz[0].questions[1]
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