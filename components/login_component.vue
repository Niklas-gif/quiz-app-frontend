<template>
    <div class="content">
        <form class="form" action="post">
            <input class="input" placeholder="email" type="email">
            <input class="input" placeholder="password" type="password">
            <!--<button @click="login" class="login_button">Login</button>-->
        </form>
        <button @click="login" class="login_button">Login</button>
    </div>
</template>

<script setup lang="ts">
import type { User } from '~/types/user';

//const user: ref<User | null> = ref<null>

async function login() {
    try {
        const response = await fetch('http://localhost:3030/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                <User> {
                id: 1,
                email: "fake@mail.com",
                password: "password1"
            })
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            document.cookie = "Token=" + jsonResponse.token
            console.log(document.cookie)
        }
    } catch (error) {
        console.error('Error sending quiz data:', error);
    }
}

</script>

<style scoped>
.content {
    @apply text-white flex flex-row justify-center items-center rounded-xl p-10 sm:m-20 m-5;
  }
.form {
    @apply  flex flex-col p-5 m-5 rounded-lg
}
.input {
    @apply p-2 m-2  bg-slate-500 rounded-lg
}
.login_button {
    @apply 
    hover:bg-purple-400 
    bg-purple-600 border-b-4 
    border-stone-800 
    text-white font-bold 
    py-5 px-5
    mt-5
    rounded-3xl;
}
</style>