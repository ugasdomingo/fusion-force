<script setup lang="ts">
//Import Tools
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user-store';

//Import Components
import LoadingComponent from '@/common/LoadingComponent.vue';

const userStore = useUserStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);

const handleSubmit = async () => {
    try {
        loading.value = true;
        await userStore.login(email.value, password.value);
        email.value = '';
        password.value = '';
        router.push('/escritorio');
    } catch (error: any) {
        console.error('error', error);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="login-container">
        <h2>Bienvenido(a) Nuevamente</h2>
        <section class="form-container">
            <LoadingComponent v-if="loading" color="primary" />
            <form v-else @submit.prevent="handleSubmit" class="form">
                <label class="label">Email:</label>
                <input
                    v-model="email"
                    class="input"
                    type="text"
                    :rules="[
                    (val:any) =>
                    (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                    'Formato email incorrecto'
                ]"
                />

                <label class="label">Contraseña:</label>
                <input
                    v-model="password"
                    class="input"
                    type="password"
                    :rules="[(val:any) => (val && val.length > 5) || 'Contraseña mínimo 6 carácteres']"
                />

                <button type="submit" class="login-btn">Iniciar Sesión</button>
            </form>
        </section>
        <section class="register">
            <p>¿Primera vez?</p>
            <button color="primary" @click="userStore.registered = false" class="register-btn">
                Crear una cuenta
            </button>
        </section>
    </div>
</template>

<style scoped>
.login-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.form-container {
    min-height: 50%;
    box-sizing: border-box;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.register-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-primary);
    color: var(--color-white);
}
.login-btn {
    width: 30%;
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid var(--color-primary);
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-none);
    color: var(--color-primary);
}
</style>
