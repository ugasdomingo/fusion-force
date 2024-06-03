<script setup lang="ts">
//Import Tools
import { ref, onMounted } from 'vue';
import { minDateTime, maxDateTime } from '@/static/daysAndHours';
import { useRouter } from 'vue-router';
import { useLeadStore } from '@/stores/lead-store';

//Import components
import LoadingComponent from '@/common/LoadingComponent.vue';

//Props
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

//Activate tools
const router = useRouter();
const leadStore = useLeadStore();

//Get form data
const loading = ref(false);
const leadsName = ref('');
const leadsPhone = ref('');
const callOnDate = ref('');
const politiquesAccepted = ref(false);

const handleSubmit = async () => {
    try {
        loading.value = !loading.value;

        let formData = new FormData();

        //Push info to formData
        formData.append('leadsName', leadsName.value);
        formData.append('leadsPhone', leadsPhone.value);
        formData.append('callOnDate', callOnDate.value);
        formData.append('askFor', comparadorType.value);

        await leadStore.createLead(formData);

        router.push('/blog');
        /* notify('Solicitud recibida'); */
    } catch (error: any) {
        console.error('error', error);
    }
};
</script>

<template>
    <LoadingComponent v-if="loading" color="primary" />
    <form v-else @submit.prevent="handleSubmit" id="shedule-call" class="form">
        <input
            class="input"
            v-model="leadsName"
            placeholder="Nombre Completo"
            type="text"
            required
            :rules="[(val:any) => (val && val.length > 0) || 'Campo Requerido']"
        />
        <input
            class="input"
            v-model="leadsPhone"
            placeholder="Número de Contacto"
            type="text"
            required
            :rules="[(val: any) => (val && val.length > 0) || 'Campo Requerido']"
        />

        <!-- Pick Date  -->
        <input
            class="input"
            type="datetime-local"
            required
            v-model="callOnDate"
            :min="minDateTime"
            :max="maxDateTime"
        />

        <!-- RGDP  -->
        <div class="rgdp">
            <input
                type="checkbox"
                required
                v-model="politiquesAccepted"
                :value="politiquesAccepted"
            />
            <p>Acceptar políticas de privacidad</p>
            <RouterLink to="politicas">Ver políticas</RouterLink>
        </div>

        <!-- Buttons  -->
        <div>
            <button v-if="politiquesAccepted" class="register-btn">Agendar Llamada</button>
            <button v-else class="login-btn">Agendar Llamada</button>
        </div>
    </form>
</template>

<style scoped>
/* General */
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
}
.rgdp {
    display: flex;
    align-items: center;
    gap: 6px;
}
.rgdp {
    font-size: xx-small;
}
/* RGDP */
/* Buttons */
.register-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0px;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-accent);
    color: var(--color-primary);
}
.login-btn {
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid grey;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-none);
    color: grey;
    cursor: default;
}
</style>
