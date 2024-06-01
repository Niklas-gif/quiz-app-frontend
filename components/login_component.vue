<template>
    <div class="content">
        <div v-show="!isLogedIn">
            <form class="form" action="post">
                <input class="input" placeholder="email" type="email" v-model="email">
                <input class="input" placeholder="password" type="password" v-model="password">
                <!--<button @click="login" class="login_button">Login</button>-->
            </form>
            <button @click="login" class="login-button">Login</button>
        </div>
        <div v-show="isLogedIn">
            <button  @click="logout" class="logout-button">Logout</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { User } from '~/types/user';

const isLogedIn = ref(false)
const email = ref("")
const password = ref("")


onMounted(()=> {
    if(localStorage.getItem("Bearer") != null){
        isLogedIn.value = true
    } else {
        isLogedIn.value = false
    }
})

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
                email: email.value,
                password: password.value,
            })
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            localStorage.setItem("Bearer",jsonResponse.token)
            isLogedIn.value = true
        }
    } catch (error) {
        console.error('Error sending quiz data:', error)
    }
}

function logout() {
    localStorage.removeItem("Bearer")
    isLogedIn.value = false
}

</script>

<style scoped>
.content {
    @apply
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
.login-button {
    @apply 
    hover:bg-purple-400 
    bg-purple-600
    drop-shadow-lg
    text-white font-bold 
    py-1 px-5
    rounded-2xl;
}

.logout-button {
    @apply 
    hover:bg-purple-400 
    bg-purple-600
    drop-shadow-lg
    text-white font-bold 
    py-1 px-5
    rounded-2xl;
}
</style>