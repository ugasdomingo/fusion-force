<script setup lang="ts"></script>

<template>
    <section class="success-container">
        <h2>Este caso de éxito podrías ser tu:</h2>
        <div class="success-info">
            <div class="caso-antes">
                <h5>Factura antes de comparar:</h5>
                <img src="/img/factura-cara-grande.webp" alt="costosa" class="invoice-img-big" />
            </div>
            <div class="caso-despues">
                <h5>Factura el mes siguiente:</h5>
                <img src="/img/factura-buena-grande.webp" alt="barata" class="invoice-img-big" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.success-container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
.success-container h2 {
    margin: 0;
}
.success-container h5 {
    margin: 0;
}
.success-info {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    padding: 1rem;
}

.invoice-img-big {
    max-width: 150px;
    object-fit: cover;
}

@media screen and (max-width: 760px) {
    .success-container {
        width: auto;
    }
    .success-info {
        width: auto;
        flex-direction: column;
        border: 0;
    }
    .success-info h5 {
        text-align: center;
        font-weight: 600;
        margin: 0;
    }
    .invoice-img-big {
        margin: 12px 0;
    }
}
</style>
