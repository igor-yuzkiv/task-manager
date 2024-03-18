<script setup lang="ts">
import {AppNavigation} from "@/widgets/app-navigation";
defineProps({

});
</script>

<template>
    <div class="layout">
        <app-navigation/>
        <main class="main ml-14 p-1">
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
