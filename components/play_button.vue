<template>
    <div class="button">
        <IconController></IconController>
    </div>

</template>

<script setup lang="ts">
import IconController from "assets/icons/icon_game_controller.vue"

</script>

<style>
.button {
    @apply hover:bg-purple-400 bg-purple-600 text-white font-bold py-4 px-4 rounded;
}

</style>