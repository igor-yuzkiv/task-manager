<script setup lang="ts">

</script>

<template>
    <div class="layout">
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped>
.layout {
    @apply flex flex-col relative h-screen w-full overflow-hidden min-w-[400px];
}
.main {
    @apply flex flex-col flex-grow overflow-auto;
}
</style>
