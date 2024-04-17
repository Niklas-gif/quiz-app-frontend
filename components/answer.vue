<template>
<div class="answer">
    42 is the answer to everything
</div>
</template>

<script>

</script>

<style scoped>
.answer {
    width: 360px;
    height: 120px;
    background-color: rgb(0, 132, 255);
    color: white;
    justify-items: center;
    align-items: center;
    text-align: center;
    display: grid;
    padding: 10px;
    @apply rounded-xl shadow-md;

}

.answer.isSelected {
    background-color: rgb(1, 60, 116);
}

</style>