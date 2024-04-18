<template>
<div class="answer" @click="toggle_selection">
    42 is the answer to everything
</div>
</template>
<script>
//"is_selected ? 'bg-red' : 'answer'"
export default {
    
    data(){
        
        return {
        is_selected : false
        };
    },
    methods: {
        toggle_selection() {
            this.is_selected = !this.is_selected;
            console.log(this.is_selected)
        }
    }

};

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