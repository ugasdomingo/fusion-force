<script setup lang="ts">
//Import text
import { textColective } from '@/static/textColective';

//Import Components
import LeadsFormComponent from '@/common/LeadsFormComponent.vue';
</script>

<template>
    <section class="hero">
        <h1>
            Únete y obtén el poder para negociar <br />
            el precio más bajo
        </h1>
        <!-- Hero Background Image  -->
        <img
            src="https://img.freepik.com/free-photo/design-made-up-onion-rings_23-2147927094.jpg?t=st=1717608510~exp=1717612110~hmac=edb3a3e42ac26eae16fa217eddf555c90b8fb384dcdf5815900ca025dc6da1e8&w=740"
            alt="Hero"
            class="hero-background"
        />
    </section>
    <main class="main-colective">
        <section>
            <h2>Únete a la compra colectiva</h2>
            <p v-html="textColective.p1"></p>
            <p v-html="textColective.p2"></p>
            <p v-html="textColective.p3"></p>
            <p v-html="textColective.p4"></p>
            <p v-html="textColective.p5"></p>
            <p v-html="textColective.p6"></p>
            <p v-html="textColective.p7"></p>
        </section>
        <aside>
            <h5>Únete a la compra colectiva</h5>
            <LeadsFormComponent :comparador="'Compra Colectiva'" />
        </aside>
    </main>
</template>

<style scoped>
.hero {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding-left: 2rem;
    font-size: 44px;
}
h1 {
    width: 70%;
    color: var(--color-accent);
}
.main-colective {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 2rem 6rem;
    position: relative;
}
section {
    position: relative;
    min-height: 500px;
}
.hero-background {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: top;
    top: 0;
    right: 0;
    z-index: -900;
}
.main-colective section {
    width: 70%;
}
h2,
h5 {
    color: var(--color-primary);
}
aside {
    position: fixed;
    bottom: 0;
    right: 4rem;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: var(--color-transparent);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
@media screen and (max-width: 760px) {
    h1 {
        width: 85%;
        font-size: 2.2rem;
    }
    .main-colective {
        padding: 2rem 0.5rem 8rem;
    }
    .main-colective section {
        width: auto;
        padding: 0 0.5rem;
    }
    section {
        width: 100%;
        min-height: 60vh;
    }
    aside {
        width: 95%;
        height: 30vh;
        top: auto;
        left: 0;
        bottom: 0;
        background-color: var(--color-white);
    }
    h5 {
        margin: 0;
        font-weight: 700;
    }
}
</style>
