<script setup lang="ts">
import DisplayContacComponent from '@/common/DisplayContactComponent.vue';
</script>

<template>
    <section class="contact-container">
        <div class="left-content">
            <h3 class="q-mb-none">Nos encargamos de todo, sin costo para ti</h3>
            <h5 class="text-justify q-mb-none">
                Todos nuestros servicios de comparación, gestión de altas y bajas y asesoría
                energética son gratuitos. Eso lo logramos gracias a nuestros acuerdos con todas las
                empresas energéticas del país.
            </h5>
            <h5 class="text-justify">
                Contáctanos en cualquier momento, por cualquier de nuestros canales, te atenderemos
                a la brevedad posible.
            </h5>
        </div>
        <div class="column items-center right-content">
            <h5>Contacto y Redes Sociales</h5>
            <DisplayContacComponent iconsSize="20px" />
        </div>
    </section>
</template>
<style scoped>
.contact-container {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 4rem 2rem;
}
.left-content {
    width: 50%;
}
.left-content h3 {
    margin-bottom: 0;
    color: var(--color-primary);
}
.right-content {
    border: 1px solid blue;
    border-radius: 8px;
    padding: 1rem;
}

@media screen and (max-width: 760px) {
    .contact-container {
        padding: 2rem 1rem;
        flex-direction: column;
    }
    .left-content {
        width: 100%;
    }
    .left-content h3 {
        font-size: xx-large;
    }
}
</style>
