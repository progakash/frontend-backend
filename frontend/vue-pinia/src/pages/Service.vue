<template>
    <h1>{{ store.name }}</h1>
    <h2>{{ store.fullName }}</h2>
    <h2>{{ store.sayHello() }}</h2>
</template>
<script setup>
import { useServiceStore } from '../stores/service';
const store = useServiceStore();
</script>