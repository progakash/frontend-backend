import { defineStore } from "pinia";
import { computed, ref } from 'vue';
import { useName } from '../composables/name.js'
//using setup store 
export const useServiceStore = defineStore('piniaAppService', () => {

    const name = ref("Anaya Noor");
    const nameObj = useName();

    const fullName = computed(() => name.value + " Aaira")

    function sayHello() {
        return 'Hello, Kamrun Naher';
    }

    return { name, fullName, sayHello, nameObj }
});