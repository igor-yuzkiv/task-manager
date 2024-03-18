<script setup lang="ts">
import "./style.css";
import {XDrawer} from "@/shared/components/drawer";
import {useLayoutStore} from "@/app/layouts/lib/useLayoutStore.ts";
import NavItem from "@/widgets/app-navigation/ui/NavItem.vue";
import LogoImage from "@/app/assets/logo.svg";
import {AppRoutes} from "@/app/router/AppRoutes.ts";

const layoutStore = useLayoutStore();
const navItems = [
    {
        label: "Home",
        route: {name: AppRoutes.home.name},
        icon: 'lets-icons:home',
    },
    {
        label: "Feed",
        route:null,
        icon: 'fluent:feed-24-regular',
    },
    {
        label: "Discuss",
        route:null,
        icon: 'tabler:messages',
    }
];

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
            <div class="nav-brand">
                <img :src="LogoImage" alt="Logo"/>
                <span>Logoipsom</span>
            </div>
            <ul class="nav-list">
                <nav-item
                    v-for="item in navItems"
                    :key="item.label"
                    :label="item.label"
                    :route="item.route"
                    :icon="item.icon"
                />
            </ul>
        </aside>
    </x-drawer>
</template>

<style scoped>

</style>
