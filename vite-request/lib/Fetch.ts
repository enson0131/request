import AxiosInstance from "./AxiosInstance";
import { MethodPlugin, RequestConfig } from "./types";

/**
 * 参考 https://blog.csdn.net/qq_40026668/article/details/119385662
 */
class Fetch {
    axiosInstance: AxiosInstance;
    plugins: Array<MethodPlugin> = []; // 传入的插件
    methodsImplement = []; 
    
    constructor(config: RequestConfig, plugins: Array<MethodPlugin>) {
        this.axiosInstance = AxiosInstance.getInstance(config);
        this.plugins = plugins;
    }


    pluginImplement() {
        
    }
}