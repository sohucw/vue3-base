<template>
    <div>
        <h1>About</h1>
        <div class="test"></div>
        <button @click="changeTest">改变</button>
        <input type="file" @change="onFileChange" />
        <Carousel :images="images" :interval="3000" />
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
// import $ from 'jquery';
// import { read, utils } from 'xlsx';
import Carousel from '../components/Carousel.vue';
const images = [
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500'
];
const changeTest = () => {
    // $('.test').html('change test');
    import('jquery')
        .then((res) => {
            const $ = res.default;
            $('.test').html('change test');
        })
        .catch((err) => {});
};
const onFileChange = (e) => {
    import('xlsx').then((res) => {
        const read = res.read;
        const utils = res.utils;

        let file = e.target.files[0];
        const wb = read(file, { type: 'array' });
        const sheets = wb.Sheets.Sheet1;
        const data = utils.sheet_to_json(sheets);
        console.log(data);
    });
};
// 定义全局变量，赋值到外层的$
onMounted(() => {
    // 页面加载完成
});
</script>
