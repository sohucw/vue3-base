<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div class="postcss-test">测试 postcss-px-to-viewport使用</div>
        <div class="wrap-films" v-if="state.list.length > 0">
            <div class="film-item" v-for="item in state.list" :key="item.url">
                <img
                    src="https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1480046723.jpg"
                    :alt="item.title"
                    :data-x="item.cover_x"
                    :data-y="item.cover_y"
                />
                <p>{{ item.title }}</p>
            </div>
        </div>
        <div v-else class="no-data">
            <span>加载中......</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
import { reactive, onMounted, watchEffect, ref, computed } from 'vue';
import { getAllFilms } from '@/api/douban';
const store = useStore();
// 调用action里面的方法获取数据
store.dispatch('douban/getAllFilmsAction');
const state = reactive<any>({
    list: []
});
// onMounted(async () => {
//     const res = await getAllFilms(1);
//     if (res) {
//         state.list = res.subjects;
//         console.log('state.list', state.list);
//     } else {
//         alert('error');
//     }
// });
state.list = computed(() => {
    return store.state.douban.list;
});
// watchEffect(() => {
// });
</script>
<style>
.postcss-test {
    margin: 10px;
}
img {
    width: 115px;
    height: 170px;
}
.wrap-films {
}
.film-item {
    display: inline-block;
    width: 240px;
}
.no-data {
}
</style>
