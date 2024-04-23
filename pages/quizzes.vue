<template>
    <body>
        <div class="content">
          <QuizComponent :description="exampleQuiz.description" :name="exampleQuiz.name" :questions="exampleQuiz.questions"/>
        </div>
    </body>

</template>

<script setup lang="ts">
  import QuizComponent from '~/components/quiz_component.vue' 
  import test_quiz from '~/testdata/fromjsontest'
  const exampleQuiz = test_quiz[0]

</script>

<style>
.content  {
  color: white;
  margin-left: 100px;
  margin-right: 100px;
  @apply flex flex-col justify-center items-center bg-gray-700 rounded-xl p-10;
}
</style>