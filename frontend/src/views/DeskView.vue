<script setup lang="ts">
//Import tools
import { useUserStore } from '@/stores/user-store';
import { useLeadStore } from '@/stores/lead-store';

//Import Components
import BlogFormComponent from '@/components/blogComponents/BlogFormComponent.vue';
import LeadsCardComponent from '@/components/leadComponents/LeadsCardComponent.vue';
import ShowCallsComponent from '@/common/ShowCallsComponent.vue';

//activate tools
const userStore = useUserStore();
const leadStore = useLeadStore();

leadStore.getAllLeads();
leadStore.getAllClicks();
</script>

<template>
    <main class="main-desk">
        <h3 class="text-primary text-center">Me alegra verte</h3>

        <section v-if="userStore.userRole" class="blog-form-container">
            <BlogFormComponent />
        </section>
        <section class="leads-container">
            <LeadsCardComponent :leads="leadStore.allLeads" />
        </section>
        <section class="leads-container">
            <ShowCallsComponent :clicks="leadStore.allClicks" />
        </section>
    </main>
</template>

<style scoped>
.main-desk {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 6rem;
    text-align: center;
}
</style>
