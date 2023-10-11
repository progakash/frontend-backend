<template>
    <Navigation></Navigation>
    <div>{{ daugter }}</div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../stores';
import Navigation from '../components/Navigation.vue'

const daugter = computed( () => store.state.name)

</script>