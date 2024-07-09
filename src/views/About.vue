<template>
    <div>
        <Carousel :images="images" :interval="3000" />
        <button v-track="{ module: 'shiftTarget', event: `click-button` }">测试</button>
    </div>
</template>

<script setup lang="ts">
import Carousel from '../components/Carousel.vue';
const images = [
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500'
];
// 制造一个错误
// eslint-disable-next-line no-undef
abc();
</script>
