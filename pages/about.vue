<template>
<NuxtPage/>
<h1>About</h1>
<button @click="toggle_button">
    test
</button>
<div v-if="show_button">
    <h1 class="font-bold">Test</h1>
</div>
<nav>
    <MyButton></MyButton>
    <RouterLink to="/">Home</RouterLink>
</nav>
</template>

<script>
export default {
    data(){
        return {
        show_button: true
        };
    },
    methods: {
        toggle_button() {
            this.show_button=!this.show_button
        }
    }

};

</script>