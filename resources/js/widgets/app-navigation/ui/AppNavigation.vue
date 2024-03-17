<script setup lang="ts">
import "./style.css";
import {XDrawer} from "@/shared/components/drawer";
import {useLayoutStore} from "@/app/layouts/lib/useLayoutStore.ts";
import NavItem from "@/widgets/app-navigation/ui/NavItem.vue";

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
        <aside :class="{'app-navigation-mini': layoutStore.isDrawerMini}">
            <ul class="nav-list">
                <nav-item></nav-item>
            </ul>
        </aside>
    </x-drawer>
</template>

<style scoped>

</style>
