<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user-store';

const userStore = useUserStore();
const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const repassword = ref('');
const loading = ref(false);

const handleSubmit = async () => {
    try {
        loading.value = true;
        await userStore.register(name.value, email.value, password.value);
        email.value = '';
        name.value = '';
        password.value = '';
        repassword.value = '';
        router.push('/escritorio');
    } catch (error) {
        console.error('error', error);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="register-container">
        <h2>Bienvenido(a) a Nuestro Equipo</h2>
        <section class="form-container">
            <LoadingComponent v-if="loading" class="loading" color="secondary" />
            <form class="form" v-else @submit.prevent="handleSubmit">
                <label class="label">Ingresa tu Nombre Completo</label>
                <input
                    type="text"
                    class="input"
                    v-model="name"
                    :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
                />

                <label class="label">Ingrese email</label>
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

                <label class="label">Ingrese contraseña</label>
                <input
                    v-model="password"
                    class="input"
                    type="password"
                    :rules="[(val:any) => (val && val.length > 5) || 'Contraseña mínimo 6 carácteres']"
                />

                <label class="label">Repita contraseña</label>
                <input
                    v-model="repassword"
                    class="input"
                    type="password"
                    :rules="[(val:any) => (val && val === password) || 'No coinciden las contraseñas']"
                />

                <button class="register-btn" type="submit">Registrarme</button>
            </form>
            <div class="mt-xl">
                <p>¿Ya tienes una cuenta?</p>
                <button class="login-btn" @click="userStore.registered = true">
                    Iniciar Sesión
                </button>
            </div>
        </section>
    </div>
</template>

<style scoped>
.register-container {
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
.login-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-primary);
    color: var(--color-white);
}
.register-btn {
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
