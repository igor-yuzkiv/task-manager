<script setup lang="ts">
import {Icon} from "@iconify/vue";

defineProps({
    label: {
        type: String,
        required: true
    },
    route: {
        type: Object,
        default: null
    },
    icon: {
        type: String,
        default: 'carbon:dot-mark'
    }
});
</script>

<template>
    <li>
        <component
            :is="route ? 'router-link' : 'div'"
            :to="route"
            class="nav-item"
        >
            <div>
                <Icon :icon="icon" class="nav-item-icon"/>
            </div>
            <div class="nav-item-text">
                {{ label }}
            </div>
        </component>
    </li>
</template>

<style scoped>

</style>
