<script setup lang="ts">
import { contactAndSocial } from '@/static/contactAndSocialData';

defineProps({
    iconsSize: String
});
</script>

<template>
    <div class="contact-social-container">
        <div class="contact-items" v-for="item in contactAndSocial" :key="item.itemsName">
            <p class="q-mb-none">
                <mdicon :name="item.icon" width="64" class="icon-big" />
                <mdicon :name="item.icon" width="24" class="icon-small" />
                <strong>{{ item.itemsName }}:</strong>
                {{ item.description }}
            </p>
            <a v-if="item.accion" class="buttom" :href="item.link" target="blank">
                {{ item.accion }}
            </a>
        </div>
    </div>
</template>

<style scoped>
.contact-items {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.contact-items p {
    font-size: small;
}
.icon-big {
    color: var(--color-primary);
}
.icon-small {
    display: none;
}
.buttom {
    color: var(--color-white);
    background-color: var(--color-primary);
    border: 0;
    border-radius: 8px;
    padding: 0.6rem 1.2rem;
    text-decoration: none;
}

@media screen and (max-width: 760px) {
    .contact-social-container {
        width: 100%;
        box-sizing: border-box;
    }

    .contact-items p {
        font-size: xx-small;
    }
    .icon-big {
        display: none;
    }
    .icon-small {
        display: inline-block;
        color: var(--color-primary);
    }
    .buttom {
        text-transform: capitalize;
        font-size: x-small;
    }
}
</style>
