<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useLeadStore } from '@/stores/lead-store';

//Import Components
import SheduleCallComponent from '@/common/SheduleCallComponent.vue';

//Activate tools
const leadStore = useLeadStore();
const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
};
const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <section class="services-container">
        <h3>¿Te gustaría pagar el gas al costo?</h3>

        <h5>
            Nosotros lo hacemos posible, ahorra en gas pagando lo menos posible gracias a nuestros
            acuerdos con las empresas energéticas
        </h5>

        <!-- Buttons -->
        <div class="acction-btn">
            <a href="tel:674395026" class="call-btn" @click="leadStore.registerClick"
                >Llamar ahora</a
            >
            <button @click="openModal" class="modal-btn">Agendar una llamada</button>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="modal-overlay" @click="closeModal">
            <SheduleCallComponent :comparador="'Comparar Gas'" class="modal" @click.stop />
        </div>

        <!-- Div for Decoration -->
        <div class="decoration-one"></div>
        <div class="decoration-two"></div>
    </section>
</template>

<style scoped>
.services-container {
    width: 100%;
    position: relative;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}
.services-container h3 {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    color: var(--color-primary);
}
.services-container h5 {
    width: 60%;
    text-align: center;
    margin: 0 auto;
}
.acction-btn {
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
}
.call-btn {
    width: 20%;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-primary);
    color: var(--color-white);
    text-align: center;
    text-decoration: none;
}
.modal-btn {
    width: 30%;
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid var(--color-primary);
    font-weight: 600;
    font-size: medium;
    background-color: var(--color-none);
    color: var(--color-primary);
}
.decoration-one {
    width: 150px;
    height: 180px;
    border-radius: 0 20% 90% 10%;
    position: absolute;
    top: 0;
    left: 0rem;
    background-image: linear-gradient(to top, #8928f0, #6302b7);
}
.decoration-two {
    width: 150px;
    height: 180px;
    border-radius: 90% 10% 0 20%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to top, #8928f0, #6302b7);
}

@media screen and (max-width: 760px) {
    .services-container {
        padding: 3rem 0;
    }
    .services-container h5 {
        width: 90%;
    }
    .acction-btn {
        width: 100%;
        gap: 1rem;
    }
    .call-btn {
        width: auto;
    }
    .modal-btn {
        width: auto;
    }
    .decoration-one {
        height: 120px;
    }
    .decoration-two {
        width: 110px;
        height: 100px;
    }
}
</style>
