<template>
    <header class="content-center text-white text-center text-6xl">
        <h1>Welcome to Quiz World!</h1>
    </header>
    <div class="content">
        <Answer description="42 Ist die Antwort auf alles!" v-bind:is_true="true"></Answer>  
        <Answer description="42 Ist die Antwort auf alles!" v-bind:is_true="false"></Answer>  
    </div>
  </template>
  
  <script>
  import Answer from '~/components/answer.vue';
  
  export default {
    components: {
      Answer
    }
  };
  </script>

<style>
.content  {
    color: white;
    margin-left: 100px;
    margin-right: 100px;
    @apply flex justify-center items-center bg-gray-700 rounded-xl;

  }
</style>
