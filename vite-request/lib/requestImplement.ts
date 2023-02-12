import axios from 'axios';
import { RequestConfig } from './types';
const AJAX_TIME = 60 * 1000;

const requestImplement = (config:RequestConfig, plugins) => {
    // 通过 config 去初始化 axios
    // 通过 plugins 去注入 请求方法
    const { initConfig = {}, runConfig = {} } = config;
    const { timeout } = initConfig

    // 创建axios实例
    const axiosInstance = axios.create({
        timeout: timeout || AJAX_TIME, // 默认1分钟超时
    });
    
    // const { header, }
    
    


    return 
}

