<template>
    <div>
        <div v-if="!isLoading && newQuiz != null">
            <NuxtLayout name="create-layout"> <!--:quiz="newQuiz"-->
                <NuxtPage/>
            </NuxtLayout>
        </div>
        <div v-else>
            <NuxtLayout name="create-layout">
                <NuxtPage/>
            </NuxtLayout>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Quiz } from '~/types/quiz';
const isLoading = ref(false)
const newQuiz = ref<Quiz|null>(null)



</script>

<style scoped>

</style>