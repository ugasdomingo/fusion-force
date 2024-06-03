<script setup lang="ts">
//Import Components
import ComparadorFormComponent from '@/components/servicesComponents/ComparadorFormComponent.vue';
import SuccessCaseComponent from '@/common/SuccessCaseComponent.vue';
</script>

<template>
    <main class="main-services">
        <h3>Servicios Fenintegral</h3>
        <h5>
            Descubre el poder de la comparación para ahorrar en tus facturas de luz y gas en Madrid.
            Nuestro servicio te brinda acceso exclusivo a las mejores tarifas del mercado,
            asegurándote ahorros significativos.
            <strong>
                ¡Deja de pagar de más y empieza a disfrutar de una energía más económica y
                eficiente!
            </strong>
        </h5>
        <div class="services-container">
            <section>
                <ComparadorFormComponent comparador="Comparar Luz" />
            </section>
            <section>
                <ComparadorFormComponent comparador="Comparar Gas" />
            </section>
        </div>
    </main>
    <div class="success">
        <SuccessCaseComponent />
    </div>
</template>

<style scoped>
.main-services {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 6rem;
}
.main-services h5 {
    width: 70%;
}
.services-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 2rem;
}
.services-container section {
    width: 40%;
    margin-bottom: 3rem;
}
.success {
    display: flex;
    flex-direction: column;
    padding: 0 16rem;
    margin: 0 auto 3rem;
}
@media screen and (max-width: 760px) {
    .main-services {
        width: auto;
        padding: 2rem 0.5rem;
    }
    .main-services h5 {
        width: auto;
    }
    .services-container {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
    }
    .services-container section {
        width: auto;
    }
    .success {
        padding: 0 4px;
    }
}
</style>
