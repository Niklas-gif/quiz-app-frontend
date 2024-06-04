<template>
    <div class="progress-bar-container">
        <div v-if="$props.progress == 100">
            <div class="progress-bar-reset" :style="{ width: props.progress + '%' }"></div>
        </div>
        <div v-else class="progress-bar" :style="{ width: props.progress + '%' }"></div>
    </div>    
</template>

<script setup lang="ts">
const emits = defineEmits(['timeout']);

const props = defineProps<({
    progress: number,
  })>()

</script>

<style scoped>
.progress-bar-container {
    width: 75%;
    height: 20px;
    background-color: #707070; 
    border-radius: 4px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background-color: #ea00ff;
    transition: width 100ms linear;
}

.progress-bar-reset {
    height: 100%;
    background-color: #ea00ff;
}
</style>