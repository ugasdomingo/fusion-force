//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosInstance from '@/services/axios';
import { useUserStore } from '@/stores/user-store';

import { type Iclick } from '@/interfaces/Iclick';

export const useLeadStore = defineStore('lead', () => {
    const userStore = useUserStore();

    //Keep all Leads results
    const allLeads = ref();
    const allClicks = ref();
    const counterClicks = ref(0);

    //Functions
    const getAllLeads = async () => {
        try {
            const res = await axiosInstance({
                url: '/lead/all',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token
                }
            });

            allLeads.value = res.data.leads;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createLead = async (formData: any) => {
        try {
            const res = await axiosInstance({
                url: '/lead/',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };
    const updateLead = async (id: string, answers: any) => {
        try {
            const res = await axiosInstance({
                url: '/lead/' + id,
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token
                },
                data: {
                    answers
                }
            });
            console.log(res.data.lead);
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const registerClick = async () => {
        await axiosInstance.post('/click', { userClick: 1 });
    };

    const getTotalClick = async () => {
        const res = await axiosInstance({
            url: '/click/total',
            method: 'GET'
        });

        counterClicks.value = res.data;
    };

    const getAllClicks = async () => {
        const res = await axiosInstance({
            url: '/click/all',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + userStore.token
            }
        });

        const allDates: any[] = [];

        res.data.map((item: Iclick) => {
            const date = new Date(item.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });

            allDates.push(date);
        });

        const countMap = allDates.reduce((acc, value) => {
            if (acc[value]) {
                acc[value]++;
            } else {
                acc[value] = 1;
            }
            return acc;
        }, {});

        allClicks.value = Object.entries(countMap).map(([fecha, clicks]) => ({ fecha, clicks }));
    };

    return {
        getAllLeads,
        createLead,
        updateLead,
        allLeads,
        registerClick,
        getAllClicks,
        allClicks,
        getTotalClick,
        counterClicks
    };
});
