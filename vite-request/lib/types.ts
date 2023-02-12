/**
 * 请求的配置类型
 */
export interface RequestConfig {
    initConfig?: { // 构建时配置
        timeout?: number;

        [key: string] : any
    }
    runConfig?: { // 运行时配置
        
    }
}

/**
 * 请求的插件类型
 */
export type MethodPlugin = () => any;