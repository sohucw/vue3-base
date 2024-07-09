import sensors from 'sa-sdk-javascript';
const token = 'XXXXX';
//初始化埋点配置
sensors.init({
    server_url: `https://test.abc.com/sa.gif?token=${token}&project=projectName`,
    show_log: true,
    is_track_single_page: false, // 单页面配置，默认开启，若页面中有锚点设计，需要将该配 置删除，否则触发锚点会多触发 $pageview 事件
    use_client_time: true,
    send_type: 'beacon',
    heatmap: {
        clickmap: 'not_collect', //是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
        scroll_notice_map: 'default' //是否开启触达图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启
    }
});
//设置公共属性
sensors.registerPage({
    platform_type: 'H5',
    current_url: location.href,
    referrer: document.referrer,
    source: 1,
    brand: 1,
    channel: []
});

//全埋点
// sensors.quick('autoTrack');

export default sensors;
