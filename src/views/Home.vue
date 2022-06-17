<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <input ref="myRef" name="inputName" :value="inputValue" />
        <button
            key="/info/table"
            @click="handleClick"
            v-track="{
                triggerType: 'click',
                actionType: '用户操作',
                title: '首页',
                currentUrl: $route.path,
                behavior: '点击了按钮'
            }"
        >
            表格
        </button>
        <div class="wrap-div">
            <div v-exp-dot v-for="item in list" :key="item.id" class="wrap-img" :data-dot="item.name">
                <img width="1608" height="322" class="image" :src="item.url" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
let url = 'https://lf3-static.bytednsdoc.com/obj/eden-cn/bqaeh7vhobd/illu_banner.png';
interface iItem {
    id: number;
    name: string;
    url: string;
}
let arr: Array<iItem> = [
    { id: 1, name: '图片1', url: url },
    { id: 2, name: '图片2', url: url }
];
const myRef = ref<HTMLInputElement>();
let list = reactive<iItem[]>([]);
list = arr;
const inputValue = ref('大伟聊前端');
onMounted(() => {
    console.dir(myRef.value?.value);
    myRef.value?.focus();
    if (myRef.value?.setSelectionRange) {
        myRef.value.setSelectionRange(0, myRef.value.value.length);
        // myRef.value.setSelectionRange(0, 0);
        // navigator.clipboard.writeText(myRef.value.value);
        // document.execCommand('copy');
    }
});
const handleClick = (e: any) => {};
</script>
<style lang="less" scoped>
input {
    padding: 16px 52px 16px 18px;
    border-radius: 48px;
    border: 1px solid;
    outline: none;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
    font-size: 16px;
    color: #626262;
}
button {
    padding: 16px;
    border-radius: 5px;
    border: 1px solid;
    outline: none;
    font-size: 16px;
    color: #626262;
    text-align: center;
}
.wrap-div {
    margin-top: 1300px;
}
.wrap-img {
    margin: 20px;
}
</style>
