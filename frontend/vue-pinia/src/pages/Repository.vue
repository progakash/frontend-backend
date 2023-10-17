<template>
    <h2>{{ nameObj.firstName }}</h2>
</template>
<script setup>
import { useName } from '../composables/name.js'
const nameObj = useName();
</script>