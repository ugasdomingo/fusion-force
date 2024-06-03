import { computed } from 'vue';

export const minDateTime = computed(() => {
    const now = new Date(Date.now());
    return now.toISOString().slice(0, 16);
    // Formato YYYY-MM-DDTHH:mm Mi
});

export const maxDateTime = computed(() => {
    const now = new Date();
    const maxDay = getNextWeekday(now, 5); // Próximo viernes
    const maxHour = '19:00';
    return `${maxDay.toISOString().slice(0, 10)}T${maxHour}`; // Formato YYYY-MM-DDTHH:mm
});

function getNextWeekday(date: Date, dayOfWeek: number) {
    const resultDate = new Date(date.getTime());
    const currentDayOfWeek = resultDate.getDay();

    if (currentDayOfWeek >= 5) {
        // Si es viernes, sábado o domingo, avanzar a la siguiente semana
        resultDate.setDate(resultDate.getDate() + (7 - currentDayOfWeek + dayOfWeek));
    } else {
        // De lo contrario, avanzar al próximo día válido de la semana actual
        const diff = dayOfWeek - currentDayOfWeek;
        resultDate.setDate(resultDate.getDate() + diff);
    }

    return resultDate;
}
