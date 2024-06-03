<template>
    <div class="button">
        <IconController />
    </div>     
</template>

<script setup lang="ts">
import IconController from "assets/icons/icon_game_controller.vue"

</script>

<style scoped>
.button {
    @apply hover:bg-sky-400 bg-sky-600 border-b-4 border-stone-800 text-white font-bold py-4 px-4 rounded-3xl hover:cursor-pointer;
}

</style>