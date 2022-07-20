<template>
    <div class="about">
        <div id="dom">{{ obj.text }}</div>
        <canvas width="800" height="600" id="canvas"></canvas>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { fabric } from 'fabric';
import test from '@/assets/test.png'; // 引入图片
import logo from '@/assets/logo.png';
function init() {
    // eslint-disable-next-line no-const-assign
    const canvas = new fabric.Canvas('canvas');
    fabric.Image.fromURL(test, (img) => {
        // console.log(canvas.width, canvas.height);
        // img.set({ originX: 'left', originY: 'top' });
        // img.scale(0.5); // 缩放
        // // canvas.add(img); // 将图片加入到画布
        // canvas.setBackgroundImage(oImg, canvas.renderAll.bind(canvas));
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width, // 计算出图片要拉伸的宽度
            scaleY: canvas.height / img.height // 计算出图片要拉伸的高度
        });
    });

    // 创建一个矩形对象
    let rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20
    });
    // 创建圆形
    let circle = new fabric.Circle({
        radius: 100,
        fill: 'red',
        scaleY: 0.5,
        originX: 'center',
        originY: 'center'
    });
    // 创建文本
    let text = new fabric.Text('hello world', {
        fontSize: 20,
        originX: 'center',
        originY: 'center'
    });
    let group = new fabric.Group([circle, text], {
        left: 150,
        top: 100,
        angle: -10
    });

    canvas.add(group);

    // 添加矩形到画布上
    canvas.add(rect);
    group.item(0).set('fill', 'blue');
    group.item(1).set({
        text: 'trololo',
        fill: 'white'
    });
    // // 监听鼠标滚轮缩放事件
    // canvas.on('mouse:wheel', (opt) => {
    //     console.log(opt.e);
    //     const delta = opt.e.deltaY; // 滚轮，向上滚一下是 -100，向下滚一下是 100
    //     let zoom = canvas.getZoom(); // 获取画布当前缩放值
    //     zoom *= 0.999 ** delta;
    //     if (zoom > 20) zoom = 20; // 限制最大缩放级别
    //     if (zoom < 0.01) zoom = 0.01; // 限制最小缩放级别
    //     // 以鼠标所在位置为原点缩放
    //     canvas.zoomToPoint(
    //         {
    //             // 关键点
    //             x: opt.e.offsetX,
    //             y: opt.e.offsetY
    //         },
    //         zoom // 传入修改后的缩放级别
    //     );
    // });
}
const obj = reactive({
    text: '我是dom'
});
onMounted(() => {
    init();
});
</script>
<style>
.about {
    display: flex;
    justify-self: center;
}
.postcss-test {
    margin: 10px;
}
.title {
    font-size: 20px;
}
</style>
