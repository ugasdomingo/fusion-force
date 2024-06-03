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
const leadsEmail = ref('');
const leadsPhone = ref('');
const callOnDate = ref('');
const img = ref();
const politiquesAccepted = ref(false);
const today = ref(
    new Date(Date.now()).toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
);

const fileInput = ref();
const handleFileChange = () => {
    img.value = fileInput?.value?.files[0];
};

const actionBtn = (comparadorType: string) => {
    if (comparadorType == 'Asesoria') {
        return 'Agendar Llamada';
    } else if (comparadorType == 'Compra Colectiva') {
        return 'Unirme';
    } else {
        return 'Comparar Ahora';
    }
};

const handleSubmit = async () => {
    try {
        loading.value = !loading.value;

        let formData = new FormData();

        //Push info to formData
        formData.append('leadsName', leadsName.value);
        formData.append('leadsPhone', leadsPhone.value);
        formData.append('callOnDate', callOnDate.value);
        formData.append('leadsEmail', leadsEmail.value);
        formData.append('askFor', comparadorType.value);
        formData.append('date', today.value);
        formData.append('img', img.value);

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
            v-if="
                comparadorType == 'Asesoria' ||
                comparadorType === 'Comparador Luz' ||
                comparadorType === 'Comparador Gas'
            "
            class="input"
            v-model="leadsPhone"
            placeholder="Número de Contacto"
            type="text"
            required
            :rules="[(val: any) => (val && val.length > 0) || 'Campo Requerido']"
        />
        <input
            v-if="
                comparadorType == 'Compra Colectiva' ||
                comparadorType === 'Comparador Luz' ||
                comparadorType === 'Comparador Gas'
            "
            class="input"
            v-model="leadsEmail"
            placeholder="Email"
            type="text"
            required
            :rules="[(val: any) => (val && val.length > 0) || 'Campo Requerido']"
        />

        <!-- Pick Date  -->
        <input
            v-if="comparadorType == 'Asesoria'"
            class="input"
            type="datetime-local"
            required
            v-model="callOnDate"
            :min="minDateTime"
            :max="maxDateTime"
        />

        <!-- Upload img  -->
        <input
            v-if="comparadorType === 'Comparador Luz' || comparadorType === 'Comparador Gas'"
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
            <p>
                Tratamiento de los datos personales, se utilizarán los datos para revisar y
                garantizar la calidad del producto y/o servicio contratado (atención al cliente,
                encuestas de satisfacción, seguimiento sobre su producto y asesoramiento al mismo),
                así como para la comunicación o remisión de notificaciones necesarias u
                obligatorias, en relación con el control y ejecución del objeto del servicio.
                Comunicaciones comerciales: Mediante consentimiento expreso, ENERGY BUSINESS CENTER
                2014 SL. , utilizará los datos personales con la finalidad de enviarle
                comunicaciones y mantenerle informado acerca de las novedades, noticias, eventos,
                productos y servicios relacionados con nosotros o nuestro sector.
                <span>Más Información</span>
            </p>
            <p>Acceptar políticas de privacidad y tratamiento de datos</p>
            <RouterLink to="politicas">Ver políticas</RouterLink>
        </div>

        <!-- Buttons  -->
        <div>
            <button v-if="politiquesAccepted" class="register-btn">
                {{ actionBtn(comparadorType) }}
            </button>
            <button v-else class="login-btn">{{ actionBtn(comparadorType) }}</button>
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
    background-color: var(--color-primary);
    color: var(--color-white);
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
