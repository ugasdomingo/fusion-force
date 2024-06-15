<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer">
        <RouterLink to="/politicas" class="btn">Políticas de Privacidad</RouterLink>
        <RouterLink to="/rgdp" class="btn">RGDP</RouterLink>
        <h6>© Todos los derechos reservados</h6>
        <RouterLink to="/escritorio" class="btn">Acceso de equipo</RouterLink>
    </footer>
</template>

<style scoped>
.footer {
    display: flex;
    height: 3rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0;
    background-color: var(--color-dark);
}
.footer h6 {
    color: rgba(255, 255, 255, 0.8);
    font-size: small;
}
.btn {
    padding: 0.3rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    background-color: var(--color-none);
    color: var(--color-white);
}
@media screen and (max-width: 760px) {
    .footer {
        height: fit-content;
        padding: 0.5rem 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .btn {
        margin: 0;
        padding: 0;
    }
    .footer h6 {
        margin: 0.5rem 0;
    }
}
</style>
