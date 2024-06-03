<script setup lang="ts">
//Import text
import { benefitsEnums } from '@/static/textBenefits';
</script>

<template>
    <section class="about-container">
        <!-- Left Content -->
        <div class="left-content">
            <h3>Por qué usar nuestro servicio gratuito:</h3>
            <div class="benefits-container">
                <div v-for="item in benefitsEnums" :key="item.title" class="icon">
                    <mdicon :name="item.icon" />
                    <p>{{ item.title }}</p>
                </div>
            </div>
        </div>

        <!-- Right Content -->
        <div class="right-content">
            <h3>¿Quienes somos?</h3>
            <h5>
                Somos más que una comparadora de Luz y Gas, somos una empresa enfocada en brindarte
                asesoría energética de forma integral para que ademas de ahorrar mucho dinero
                también consigas un uso eficiente de energía.
            </h5>
        </div>
    </section>
</template>

<style scoped>
.about-container {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 2rem 4rem;
    position: relative;
    color: var(--color-white);
    background-image: linear-gradient(to right, rgb(99, 2, 183, 0.9), rgb(0, 0, 0, 0.9));
}

.left-content {
    width: 50%;
    margin-right: 3rem;
}
.icon {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.right-content {
    width: 45%;
    padding: 6rem 0 0;
}
.right-content h5 {
    text-align: justify;
}

@media screen and (max-width: 760px) {
    .about-container {
        width: auto;
        flex-direction: column;
        padding: 1rem 1rem;
    }
    .left-content {
        width: auto;
        margin: 0;
    }
    .right-content {
        width: auto;
        margin: 0;
        padding: 0;
    }
}
</style>
