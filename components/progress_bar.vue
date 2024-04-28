<template>
    <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>    
</template>

<script setup lang="ts">

let progress = ref(100)

onMounted(()=> {
     setInterval(() => {
        if(progress.value != 0) {
            progress.value -= 1
        } else {
            progress.value = 0
        }
     },100)  
})

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
    transition: width 1s linear;
}
</style>