// sendBeacon 上报
interface reportParams {
    url: string;
    params: any;
    img?: string;
}

export async function sendBeacon({ url = '', params }: reportParams): Promise<boolean> {
    if (navigator?.sendBeacon && url) {
        // 注意：navigator.sendBeacon 不返回一个 Promise，它是一个异步操作并返回一个布尔值
        const isSuccess = navigator.sendBeacon(url, JSON.stringify(params));
        return isSuccess;
    }
    return false;
}

// img 上报
export function sendImg({ img = '', params }: reportParams): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        const imageData = objectToQueryString(params);
        const img_o = new Image();
        img_o.onload = () => resolve(true);
        img_o.onerror = () => reject(false);
        img_o.src = `${img}?${imageData}`;
    });
}

function objectToQueryString(obj: any) {
    const params = new URLSearchParams();

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            params.append(key, obj[key]);
        }
    }

    return params.toString();
}

// 定义上报函数映射类型
type ReportFunctionType = (params: reportParams) => Promise<any>;

// 初始化上报函数映射对象
const EVENT_REPORT_FUNCTION_MAP: { [key: string]: ReportFunctionType } = {
    IMG: sendImg,
    BEACON: sendBeacon
    // 如果有 AJAX，可以在这里添加 AJAX 实现
    // AJAX: sendAjax,
};

// 基础上报函数
export async function reportAction(params: reportParams, reportType: string[] = ['IMG', 'BEACON']) {
    let finalType: string | false = false;
    for (const type of reportType) {
        if (!finalType && EVENT_REPORT_FUNCTION_MAP[type]) {
            try {
                await EVENT_REPORT_FUNCTION_MAP[type](params);
                finalType = type;
            } catch (error) {
                console.error(error);
            }
        }
    }
    return finalType;
}
