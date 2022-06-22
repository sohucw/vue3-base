import request from '@/utils/request';
import { AxiosResponse } from 'axios';

/**
 *  获取所有的电影
 * @returns
 */
export function getAllFilms(parentId?: number): Promise<AxiosResponse> {
    return request({
        url: '/get/all/films',
        params: {
            parentId
        }
    });
}

/**
 * 新增一条信息
 * @param data
 * @returns
 */
export function postBuildingInfo(data: any): Promise<AxiosResponse<any>> {
    return request({
        url: '/post/all/films',
        data,
        method: 'post'
    });
}
