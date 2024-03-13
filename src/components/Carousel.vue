<template>
    <div class="carousel">
        <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="carousel-item" v-for="(image, index) in images" :key="index">
                <img :src="image" :alt="`Slide ${index}`" />
            </div>
        </div>
        <button @click="prev">Previous</button>
        <button @click="next">Next</button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

const props = defineProps({
    images: {
        type: Array,
        required: true
    },
    interval: {
        type: Number,
        default: 3000
    }
});

const currentIndex = ref(0);
let intervalId;

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prev = () => {
    currentIndex.value = (currentIndex.value + props.images.length - 1) % props.images.length;
};

onMounted(() => {
    intervalId = setInterval(next, props.interval);
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<style scoped>
.carousel {
    position: relative;
    overflow: hidden;
}
.carousel-inner {
    display: flex;
    transition: transform 0.5s ease;
}
.carousel-item {
    flex: 0 0 100%;
}
.carousel-item img {
    width: 500px;
}
</style>
