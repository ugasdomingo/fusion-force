//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUtilsStore = defineStore('Utils', () => {
    const isResponsiveMenuOpen = ref(false);
    const modalColective = ref(false);

    return {
        isResponsiveMenuOpen,
        modalColective
    };
});
