<template>
    <div>{{ daugter }}</div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../stores';

const daugter = computed( () => store.state.name)

</script>