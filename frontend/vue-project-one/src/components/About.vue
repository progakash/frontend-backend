<template>
    <h1>connect frontend with laravel</h1>
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="studentData">
        <div v-for="({id, name, email}, i) in studentData" :key="id">
            <h2>
                {{ ++i }}
                {{ name }}
                {{ email }}
            </h2>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import useStudent from "../composables/studentApi"
const { studentData, error, getAllStudent } = useStudent();
onMounted(getAllStudent);
</script>