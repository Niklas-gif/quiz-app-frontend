<template>
    <div class="content">
        <div v-if="responseText !== null">{{ responseText }}</div>
        <div v-show="!isLogedin">
            <form class="form" action="post">
                <input class="input" placeholder="email" type="email" v-model="email">
                <input class="input" placeholder="password" type="password" v-model="password">
            </form>
            <button @click="login" class="login-button">Login</button>
            <input class="m-2" type="checkbox" :value="saveLogin" v-model="saveLogin" @click="toggleSaveLoginInfo()">Remember Login?</input>
        </div>
        <div v-show="isLogedin">
            <button  @click="logout" class="logout-button">Logout</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { User } from '~/types/user';

const isLogedin = ref(false)
const email = ref("")
const password = ref("")
const saveLogin = ref(false)
const responseText: Ref<string|null> = ref(null)


onMounted(()=> {
    if(localStorage.getItem("Bearer") != null){
        isLogedin.value = true
    } else {
        isLogedin.value = false
    }
   saveLogin.value = JSON.parse(localStorage.getItem("SaveLogin")!) ?? false
   if(saveLogin.value) {
    email.value = localStorage.getItem("email")!
    password.value = localStorage.getItem("password")!
   }
})

function toggleSaveLoginInfo() {
    localStorage.setItem("SaveLogin",!saveLogin.value as any)
    saveLogin.value = JSON.parse(localStorage.getItem("SaveLogin")!) ?? false
    if(saveLogin.value) {
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
   } else {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
   }
}

async function login() {
    try {
        const response = await fetch('http://localhost:3030/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                <User>{
                    id: 1,
                    email: email.value,
                    password: password.value,
                })
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            localStorage.setItem("Bearer", jsonResponse.token)
            isLogedin.value = true
            responseText.value = null
        }
    } catch (error) {
        //TODO still needs fixing
        const errorMessage = await error
        console.error('Login failed:',errorMessage)
        responseText.value = "Password or Email is invalid."
    }
    if (saveLogin.value) {
        //This is just temporally use secure cookie / session
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
    }
}

function logout() {
    localStorage.removeItem("Bearer")
    isLogedin.value = false
}

</script>

<style scoped>
.content {
    @apply
    bg-slate-800
    text-white 
    flex flex-col 
    justify-center 
    items-center 
    rounded-bl-xl 
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