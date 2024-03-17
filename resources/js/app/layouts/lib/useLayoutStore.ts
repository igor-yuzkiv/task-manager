import {defineStore} from "pinia";
import {ref} from "vue";

export const useLayoutStore = defineStore('layoutStore',() => {
    const isDrawerOpen = ref(false);
    const isDrawerMini = ref(false);


    return {
        isDrawerMini,
        isDrawerOpen,
    };
});
