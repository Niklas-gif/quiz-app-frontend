<template>
<NuxtLayout>
    <NuxtWelcome/>
    <nav>
        <RouterLink to="/about">About (RoutLink)</RouterLink>
        <br>
        <a href="/about">About (pageload)</a>
    </nav>
</NuxtLayout>
</template>