//获取开始时间
let startTime = Date.now();
//定义一个获取用户的函数
export const countTime = (to: any, from: any) => {
    //获取当前时间
    const currentTime = Date.now();
    // console.log(
    //     '用户由 ',
    //     from.path,
    //     ' 页面 跳转到 ',
    //     to.path,
    //     ' 页面，在 ',
    //     from.path,
    //     ' 页面停留了 ',
    //     currentTime - startTime,
    //     '毫秒。转换成秒数约为：',
    //     (currentTime - startTime) / 1000
    // );
    //初始化开始时间
    startTime = Date.now();
    // console.log('======== 分割线 ========');
};
