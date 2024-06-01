<template>
    <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: props.progress + '%' }"></div>
    </div>    
</template>

<script setup lang="ts">
const emits = defineEmits(['timeout']);

const props = defineProps<({
    progress: Number,
  })>()

</script>

<style scoped>
.progress-bar-container {
    width: 50%;
    height: 20px;
    background-color: #707070; 
    border-radius: 4px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background-color: #ea00ff;
    transition: width linear;
}
</style>