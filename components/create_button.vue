<template>
    <div class="button">
        <IconEditPen />
    </div>     

</template>

<script setup lang="ts">
import IconEditPen from "assets/icons/icon_edit_pen.vue"

</script>

<style scoped>
.button {
    @apply 
    hover:bg-sky-400 
    bg-sky-600 border-b-4 
    border-stone-800 
    text-white font-bold 
    py-4 px-4 
    rounded-3xl;
}

</style>