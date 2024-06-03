//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosInstance from '@/services/axios';
import { useUserStore } from '@/stores/user-store';

export const useQuoteStore = defineStore('test', () => {
    const userStore = useUserStore();

    //Keep all Quotes results
    const allQuotes = ref();

    //Functions
    const getAllQuotes = async () => {
        try {
            const res = await axiosInstance({
                url: '/quote/all',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token
                }
            });

            allQuotes.value = res.data.quotes;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const createQuote = async (formData: any) => {
        try {
            const res = await axiosInstance({
                url: '/quote',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            });

            console.log(res.data.quote);
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };
    const updateQuote = async (id: string, answers: any) => {
        try {
            const res = await axiosInstance({
                url: '/quote/' + id,
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token
                },
                data: {
                    answers
                }
            });
            console.log(res.data.quote);
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return { getAllQuotes, createQuote, updateQuote, allQuotes };
});
