<script setup lang="ts">
//Import Tools
import { ref, onMounted } from 'vue';

//Import Components
import SuccessCaseComponent from '@/common/SuccessCaseComponent.vue';

//Activate tools
const users = ref(1500);
const dailyCalls = ref(50);

onMounted(async () => {
    const targetUser = 4000;
    const targetCalls = 120;

    const intervalOne = setInterval(() => {
        if (users.value < targetUser) {
            users.value = users.value + 100;
        } else {
            clearInterval(intervalOne);
        }
    }, 100);

    const intervalTwo = setInterval(() => {
        if (dailyCalls.value < targetCalls) {
            dailyCalls.value = dailyCalls.value + 10;
        } else {
            clearInterval(intervalTwo);
        }
    }, 100);
});
</script>

<template>
    <section id="luz-section" class="luz-comparador-container">
        <h3>¿Quieres saber un secreto?</h3>
        <h5>
            <strong> Las empresas energéticas compiten por tu atención.</strong>
            <br />Por eso siempre están sacando nuevas ofertas, nuestro comparador consigue la mejor
            para ti.
        </h5>
        <div class="success-comparador">
            <section class="left-content">
                <SuccessCaseComponent />
            </section>

            <section class="numbers-section">
                <h2 class="text">
                    Más de <span>{{ users }}</span> usuarios atendidos
                </h2>
                <h2 class="text">
                    Más de <span>{{ dailyCalls }}</span> llamadas por día
                </h2>
            </section>
        </div>
    </section>
</template>

<style scoped>
.luz-comparador-container {
    width: 100%;
    min-height: 60vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 4rem 6rem;
}
h3 {
    margin: 0;
    color: var(--color-primary);
}
h5 {
    margin-top: 0.5rem;
    color: var(--color-primary);
}
.success-comparador {
    display: flex;
    justify-content: space-between;
}
.btn-switch {
    margin: 1rem 0 0 1rem;
}
.numbers-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
}
.numbers-section h2 {
    margin: 0;
    color: var(--color-secondary);
}
.numbers-section span {
    margin: 0;
    font-size: xx-large;
    color: var(--color-dark);
}

@media screen and (max-width: 760px) {
    h3 {
        margin-top: 0;
    }
    .luz-comparador-container {
        width: 100%;
        flex-direction: column;
        text-align: center;
        padding: 2rem 0.5rem;
    }
    .success-comparador {
        flex-direction: column;
    }
    .numbers-section {
        padding: 2rem 0;
        flex-direction: column-reverse;
    }
    .numbers-section h2 {
        font-size: medium;
    }
}
</style>
