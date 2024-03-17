<script setup lang="ts">

import {ref} from "vue";
import {XDrawer} from "@/shared/components/drawer";
import {Icon} from "@iconify/vue";

const miniState = ref<boolean>(true);
</script>

<template>
    <x-drawer
        class="app-navigation"
        :model-value="true"
        @mouseenter="miniState = false"
        @mouseleave="miniState = true"
        height="40vw"
        :mini="miniState"
    >
        <div class="flex items-center gap-x-2 text-white">
            <Icon icon="lets-icons:home" width="30"/>
            <span v-if="miniState">
                Home
            </span>
        </div>
    </x-drawer>
</template>

<style scoped>
.app-navigation {
    @apply bg-gray-800;
}
</style>
