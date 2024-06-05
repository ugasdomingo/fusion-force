<script setup lang="ts">
import DisplayContacComponent from '@/common/DisplayContactComponent.vue';
</script>

<template>
    <section class="contact-container">
        <h3>Contacto y Redes Sociales</h3>
        <DisplayContacComponent iconsSize="20px" />
        <img
            src="https://img.freepik.com/free-photo/design-made-up-onion-rings_23-2147927094.jpg?t=st=1717608510~exp=1717612110~hmac=edb3a3e42ac26eae16fa217eddf555c90b8fb384dcdf5815900ca025dc6da1e8&w=740"
            alt="Hero"
            class="contact-background"
        />
    </section>
</template>
<style scoped>
.contact-container {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 30%;
    margin: 0 auto;
}
.contact-container h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
    text-align: center;
}
.contact-background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: top;
    top: 0;
    right: 0;
    z-index: -900;
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
