<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
        <div>
            <div style="font-size: 30vh">404</div>

            <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

            <RouterLink to="/">Go Home</RouterLink>
        </div>
    </div>
</template>
