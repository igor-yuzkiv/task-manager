<script setup lang="ts">
import {XDrawer} from "@/shared/components/drawer";
import {useLayoutStore} from "@/app/layouts/lib/useLayoutStore.ts";

const layoutStore = useLayoutStore();

</script>

<template>
    <x-drawer
        class="app-navigation"
        :modelValue="layoutStore.isDrawerOpen"
        @mouseenter="layoutStore.isDrawerMini = false"
        @mouseleave="layoutStore.isDrawerMini = true"
        :mini="layoutStore.isDrawerMini"
    >
        <aside>

        </aside>
    </x-drawer>
</template>

<style scoped>
.app-navigation {
    @apply bg-gray-50;
}
</style>
