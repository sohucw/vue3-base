import sensors from '../utils/sensor';
const userInfo = {
    userid: '123456',
    userName: '张三'
};
export default {
    mounted(el: HTMLElement, binding: any) {
        // 埋点
        el.addEventListener('click', () => {
            //获取登录用户信息
            const { userid, userName } = userInfo;
            const bindData = binding.value;
            //上报数据需根据实践业务需求填写
            const track_data = {
                onClick: `event_click_${bindData.module}_${bindData.event}`,
                data: { userid, userName, ...bindData }
            };
            sensors.track('event_click', track_data);
        });
    }
};
