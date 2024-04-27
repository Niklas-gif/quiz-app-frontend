<template>
    <div>
        {{progress}}
    </div>
</template>

<script setup lang="ts">

let progress = ref(100)

onMounted(()=>{
     setInterval(() => {
        if(progress.value != 0) {
            progress.value -= 2.5
        } else {
            progress.value = 100
        }
     },100)  
})

</script>