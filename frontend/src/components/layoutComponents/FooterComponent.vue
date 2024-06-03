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
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0;
    background-image: linear-gradient(to bottom, rgb(99, 2, 183, 0.9), rgb(0, 0, 0, 0.9));
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
        height: auto;
        padding: 8px 4px;
        display: flex;
        flex-direction: column;
    }
}
</style>
