import axios from 'axios';
import { RequestConfig } from './types';

export const requestImplement = (config:RequestConfig, plugins) => {
    // 通过 config 去初始化 axios
    // 通过 plugins 去注入 请求方法
    const { initConfig = {}, runConfig = {} } = config;
    const { timeout } = initConfig

    // // 创建axios实例
    // const axiosInstance = axios.create({
    //     timeout: timeout || AJAX_TIME, // 默认1分钟超时
    // });
    
    // // const { header, }
    
    // // 注入拦截器

    // // 注入响应器
    
    // 初始化 Fetch 类 👉 这里会初始化 axios 实例，并注入拦截器和响应器

    // Fetch 挂载各个插件

    // 返回结果
    return {
        update: () => 1,
        cancel: () => 1,
    }
}

