function request(methodFun: MethodPlugin) {
    return async (url: string, params?: object, config?: object) => {
        return await methodFun(url, params, config)
            .then((res: ResponseResType) => {
                const { status } = res;
                if (status !== SUCESS_STATUS) {
                    const err = res;
                    return [err, null];
                }
                return [null, res];
            })
            .catch((err) => {
                return [err, null];
            })
            .finally(() => {
                const index = getEqualReqIndex(url, params);
                if (index > -1) {
                    reqQueue.splice(index, 1);
                }

                if (reqTimer) {
                    return;
                }

                reqTimer = window.setTimeout(() => {
                    // 防止请求超时的情况
                    console.log('reqQueue', reqQueue);
                    reqQueue = []; // 清空队列
                    reqTimer = 0;
                }, AJAX_TIME);
            });
    };
}