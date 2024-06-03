<script setup lang="ts">
//Import tootls
import { useUserStore } from '@/stores/user-store';

//Import Components
import LoginComponent from '@/components/authComponents/LoginComponent.vue';
import RegisterComponent from '@/components/authComponents/RegisterComponent.vue';

//Activate tools
const userStore = useUserStore();
</script>

<template>
    <main class="main-login view-padding">
        <LoginComponent v-if="userStore.registered" />
        <RegisterComponent v-else />
    </main>
</template>

<style scoped>
.main-login {
    width: 100%;
}
</style>
