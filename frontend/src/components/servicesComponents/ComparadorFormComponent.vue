<script setup lang="ts">
//Import Tootls
import { ref, onMounted } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useLeadStore } from '@/stores/lead-store';

//Activate tools
const router = useRouter();
const leadStore = useLeadStore();

//Props
const props = defineProps({
    comparador: {
        type: String,
        required: true
    }
});
const comparadorType = ref('');

onMounted(() => {
    comparadorType.value = props.comparador;
});

//Loading
const loadding = ref(false);

//Catch data
const leadsName = ref('');
const leadsEmail = ref('');
const leadsPhone = ref('');
const img = ref();
const politiquesAccepted = ref(false);

const fileInput = ref();
const handleFileChange = () => {
    img.value = fileInput?.value?.files[0];
};

const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;

        let formData = new FormData();

        //Push info to formData
        formData.append('leadsName', leadsName.value);
        formData.append('leadsEmail', leadsEmail.value);
        formData.append('leadsPhone', leadsPhone.value);
        formData.append('askFor', comparadorType.value);
        formData.append('img', img.value);

        await leadStore.createLead(formData);

        router.push('/blog');
        /* notify('Solicitud recibida'); */
    } catch (error: any) {
        console.log('error', error);
    }
};
</script>

<template>
    <main :class="comparador == 'Comparar Luz' ? 'luz-container' : 'gas-container'">
        <h5>{{ comparador }}</h5>
        <!--  <q-spinner-pie color="primary" size="5em" v-if="loadding" /> -->
        <form @submit.prevent="handleSubmit" class="form">
            <label class="label">Nombre y Apellido</label>
            <input
                v-model="leadsName"
                type="text"
                required
                class="input"
                :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
            />

            <label class="label">Email</label>
            <input
                v-model="leadsEmail"
                class="input"
                type="text"
                required
                :rules="[
                    (val:any) =>
                        (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                        'Formato email incorrecto'
                ]"
            />

            <label class="label">Número de Teléfono</label>
            <input
                v-model="leadsPhone"
                type="text"
                required
                class="input"
                :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
            />

            <label class="label">Adjunta tu Factura</label>
            <input
                type="file"
                required
                ref="fileInput"
                @change="handleFileChange"
                accept="image/*"
            />

            <!-- RGDP  -->
            <div class="rgdp">
                <input
                    type="checkbox"
                    required
                    v-model="politiquesAccepted"
                    :value="politiquesAccepted"
                />
                <p>Acceptar políticas de privacidad y tratamiento de datos</p>
                <p>
                    Mediante la aceptación de la casilla el usuario da consentimiento el envío de
                    comunicaciones comerciales, informando acerca de nuestros productos y servicios
                    <RouterLink to="rgdp">Más Información</RouterLink>
                </p>
                <RouterLink to="politicas">Ver políticas</RouterLink>
            </div>

            <!-- Buttons  -->
            <div class="q-my-md">
                <button v-if="politiquesAccepted" type="submit" class="register-btn">
                    Solicitar
                </button>
                <button v-else class="login-btn">Solicitar</button>
            </div>
        </form>
    </main>
</template>

<style scoped>
.luz-container {
    border: 1px solid var(--color-primary);
    padding: 1rem;
    border-radius: 16px;
}
.gas-container {
    border: 1px solid var(--color-positive);
    padding: 1rem;
    border-radius: 16px;
}
.form {
    display: flex;
    flex-direction: column;
}
.label {
    margin-top: 1.5rem;
}
.rgdp {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: xx-small;
    padding: 4px 0;
    margin: 1rem 0;
}
.rgdp p {
    margin: 0;
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
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid var(--color-primary);
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-none);
    color: var(--color-primary);
    cursor: default;
}

@media screen and (max-width: 760px) {
    .luz-container {
        width: 100%;
        box-sizing: border-box;
        padding: 2rem 0.2rem;
    }
    .gas-container {
        width: 100%;
        box-sizing: border-box;
        padding: 2rem 0.2rem;
    }
    .form {
        padding: 0 1rem;
    }
    .label {
        margin-top: 1rem;
    }
    .rgdp {
        font-size: small;
        padding: 2rem 0;
        margin: 0;
        box-sizing: border-box;
    }
    .register-btn {
        padding: 0.6rem 1rem;
    }
    .login-btn {
        padding: 0.6rem 1rem;
    }
}
</style>
