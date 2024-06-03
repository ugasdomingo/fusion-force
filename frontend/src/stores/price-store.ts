//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import axiosPriceApi from '@/services/axiosPriceApi';

export const usePriceStore = defineStore('price', () => {
    //Keep all Leads results
    const nowPrice = ref(0);
    const nowHour = ref('');
    const lowPriceOne = ref(0);
    const lowPriceTwo = ref(0);
    const lowPriceThree = ref(0);
    const lowHourOne = ref('');
    const lowHourTwo = ref('');
    const lowHourThree = ref('');
    const classPrice = ref('');

    const getNowPrice = async () => {
        try {
            const res = await axiosPriceApi({
                url: 'now?zone=PCB',
                method: 'GET'
            });

            console.log(JSON.parse(res.data.contents));
            const results = JSON.parse(res.data.contents);

            nowHour.value = results.hour;
            nowPrice.value = parseFloat((results.price / 1000).toFixed(4));
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getLowPrices = async () => {
        try {
            const res = await axios.get(
                `https://api.allorigins.win/get?url=${encodeURIComponent(
                    'https://api.preciodelaluz.org/v1/prices/cheapests?zone=PCB&n=3'
                )}`
            );

            const results = JSON.parse(res.data.contents);

            lowHourOne.value = results[0].hour;
            lowHourTwo.value = results[1].hour;
            lowHourThree.value = results[2].hour;
            lowPriceOne.value = parseFloat((results[0].price / 1000).toFixed(4));
            lowPriceTwo.value = parseFloat((results[1].price / 1000).toFixed(4));
            lowPriceThree.value = parseFloat((results[2].price / 1000).toFixed(4));
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const initialFunction = async () => {
        await getNowPrice();
        await getLowPrices();

        const rangoA = lowPriceThree.value * 1.5;
        const rangoB = lowPriceThree.value * 2.5;

        if (nowPrice.value > rangoB) {
            classPrice.value = 'high';
        }
        if (nowPrice.value > rangoA && nowPrice.value < rangoB) {
            classPrice.value = 'medium';
        }
        if (nowPrice.value < rangoA) {
            classPrice.value = 'low';
        }
    };

    return {
        getNowPrice,
        getLowPrices,
        initialFunction,
        classPrice,
        nowPrice,
        nowHour,
        lowHourOne,
        lowHourTwo,
        lowHourThree,
        lowPriceOne,
        lowPriceTwo,
        lowPriceThree
    };
});
