import { defineStore } from "pinia";
import { computed, ref } from 'vue';

//using setup function
export const useServiceStore = defineStore('piniaAppService', () => {

    const name = ref("Anaya Noor");

    const fullName = computed(() => name.value + " Aaira")

    function sayHello() {
        return 'Hello, Kamrun Naher';
    }

    return { name, fullName, sayHello }
});