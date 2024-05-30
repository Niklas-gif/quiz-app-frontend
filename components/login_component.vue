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
            localStorage.setItem("Bearer",jsonResponse.token)
            console.log(document.cookie)
        }
    } catch (error) {
        console.error('Error sending quiz data:', error);
    }
}

</script>

<style scoped>
.content {
    @apply 
    fixed
    bg-slate-600
    text-white 
    flex flex-col 
    justify-center 
    items-center 
    rounded-b-xl 
    mb-5
    w-fit 
    p-5;
  }
.form {
    @apply  flex flex-col rounded-lg
}
.input {
    @apply p-2 m-2  bg-slate-500 rounded-lg
}
.login_button {
    @apply 
    hover:bg-purple-400 
    bg-purple-600
    drop-shadow-lg
    text-white font-bold 
    py-1 px-5
    rounded-2xl;
}
</style>