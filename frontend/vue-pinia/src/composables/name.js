import { ref } from 'vue';
import { faker } from '@faker-js/faker'

export function useName() {
    const firstName = ref(faker.person.firstName());
    const lastName = ref(faker.person.lastName());

    return { firstName, lastName }
}