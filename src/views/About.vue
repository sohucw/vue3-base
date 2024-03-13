<template>
    <Carousel :images="images" :interval="3000" />
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
const images = [
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500'
];
</script>
