<template>
  <div>
    <NuxtLayout v-if="currentLayout == Layouts.index" name="index-layout">
      <NuxtPage />
    </NuxtLayout>
    <NuxtLayout v-if="currentLayout == Layouts.create" name="create-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
enum Layouts {
  index,
  create,
  edit
}

const currentLayout = ref(Layouts.index)
const router = useRouter()


</script>

<style scoped>

</style>