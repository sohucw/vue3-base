// polyfill
import 'intersection-observer';
// 网络请求
// import { DotData } from './DotData';
// 可以把节流的时间调大一点，默认是100ms
// IntersectionObserver?.prototype['THROTTLE_TIMEOUT'] = 300;
export default class Exposure {
    dotDataArr: Array<string>;
    maxNum: number;
    // 可以理解为观察者的集合吧
    observer: IntersectionObserver | undefined;
    timer: number;
    constructor(maxNum = 10) {
        // 当前收集的  尚未上报的数据  也就是已经进入视窗的DOM节点的数据
        this.dotDataArr = [];
        this.maxNum = maxNum;
        this.timer = 0;
        // 全局只会实例化一次Exposure类，init方法也只会执行一次
        this.init();
    }
    init() {
        // 把浏览器localStorage里面的剩余数据打完
        this.dotFromLocalStorage();
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 这段逻辑，是每一个商品进入视窗时都会触发的
                    if (entry.isIntersecting) {
                        // 清楚当前定时器
                        clearTimeout(this.timer);
                        // 我这里是直接把商品相关的数据直接放DOM上面了
                        const ctm = entry.target.getAttribute('data-dot') || '';
                        console.log('ctm============', ctm);
                        // 把收集到的数据添加进待上报的数据数组中
                        this.dotDataArr.push(ctm);
                        // 收集到该商品的数据后，取消对该商品DOM的观察
                        this.observer?.unobserve(entry.target);
                        // 超过一定数量打点，打完点会删除这一批
                        if (this.dotDataArr.length >= this.maxNum) {
                            this.dot();
                        } else {
                            this.storeIntoLocalStorage(this.dotDataArr);
                            if (this.dotDataArr.length > 0) {
                                //，只要有新的ctm进来  接下来如果没增加  自动2秒后打
                                this.timer = setTimeout(() => {
                                    this.dot();
                                }, 2000);
                            }
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5 // 这个阈值可以小一点点
            }
        );
    }

    // 每个商品都会会通过全局唯一的Exposure的实例来执行该add方法,将自己添加进观察者中
    add(entry: any) {
        this.observer?.observe(entry.el);
    }
    dot() {
        // 同时删除这批打点的ctms
        const dotDataArr = this.dotDataArr.splice(0, this.maxNum);
        // TODO: 调用后端接口 调用后端接口继续上包 DotData(dotDataArr);
        // 打完点，也顺便更新一下localStorage
        this.storeIntoLocalStorage(this.dotDataArr);
        console.log('dotDataArr=========dotDataArr: ', dotDataArr);
    }
    storeIntoLocalStorage(dotDataArr: Array<string>) {
        // 。。。 存进localStorage中，具体什么格式的字符串自行定义就好
    }
    dotFromLocalStorage() {
        const ctmsStr = window.localStorage.getItem('dotDataArr');
        if (ctmsStr) {
            //  TODO: 调用后端接口，如果有数据，就上报打点   调用后台数据
        }
    }
}
