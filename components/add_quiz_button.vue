<template>
    <div class="button">
        <p>Question</p>
        <IconPlus />
    </div>     

</template>

<script setup lang="ts">
import IconPlus from "assets/icons/icon_plus.vue"

</script>

<style>
.button {
    @apply
    flex 
    flex-row
    hover:bg-purple-400 
    bg-purple-600 border-b-4 
    border-stone-800 
    text-white font-bold 
    py-4 px-4 
    my-4 mx-4 
    rounded-3xl;
}

</style>