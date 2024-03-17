<script setup lang="ts">
import {computed, PropType} from "vue";
import {SideEnum} from "@/shared/components/drawer/types.ts";

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
    side: {
        type: String as PropType<SideEnum>,
        default: SideEnum.left,
        validator: (value: string) => Object.values(SideEnum).includes(value as SideEnum)
    },
    mini: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: "300px"
    },
    height: {
        type: String,
        default: "300px"
    },
    miniWidth: {
        type: String,
        default: "57px"
    },
    miniHeight: {
        type: String,
        default: "57px"
    },
});

defineEmits<{
    'update:modelValue': [value: boolean]
}>();

const containerSize = computed(() => {
    const dimensions = [SideEnum.left, SideEnum.right].includes(props.side) ? "width" : "height";
    const miniDimensions = [SideEnum.left, SideEnum.right].includes(props.side) ? "miniWidth" : "miniHeight";

    return {
        [dimensions]: props.mini ? props[miniDimensions] : props[dimensions],
    }
});

</script>

<template>
    <div
        class="drawer-container"
        :class="{
            'drawer-left': side === SideEnum.left,
            'drawer-right': side === SideEnum.right,
            'drawer-top': side === SideEnum.top,
            'drawer-bottom': side === SideEnum.bottom,
        }"
        :style="containerSize"
    >
        <slot/>
    </div>
</template>

<style scoped>
.drawer-container {
    @apply fixed z-50 transition-all duration-200 ease-in-out;
}

.drawer-left {
    @apply left-0 h-full;
}

.drawer-right {
    @apply right-0 h-full;
}

.drawer-top {
    @apply top-0 w-full;
}

.drawer-bottom {
    @apply bottom-0 w-full;
}
</style>
