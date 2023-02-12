import { RequestConfig } from "./types";

class AxiosInstance {
    private static _instance: AxiosInstance;

    constructor(config: RequestConfig) {
        const {initConfig, runConfig} = config
    }

    
    public static getInstance(config: RequestConfig): AxiosInstance {
        this._instance || (this._instance = new AxiosInstance(config));
        return this._instance;
    }
    


}

export default AxiosInstance;