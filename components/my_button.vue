//Test
<template>
    <input v-model="message"/>
    <button 
        @click="submitChanges" 
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Submit
    </button>
    <p>{{display}}</p>
</template>

<script>
export default {
    data() {
        return {
            message: "",
            display: "Hello, Vue!"
        };
    },
    methods: {
        submitChanges() {
            this.display = this.message;
        }
    }
};
</script>