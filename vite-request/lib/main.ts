export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

let requestInstance: any= null; // 返回一个封装好的请求对象
/**
 * 初始化
 */
export function init(config, plugins = []) {
  if (requestInstance) { // 如果
    requestInstance.reset();
  }
  requestInstance = requestImplement(config, [
    ...(plugins || [])
  ])

  return requestInstance;
}

/**
 * update 更新函数
 */
export function update(config, plugins = []) {
  if (!requestInstance) { // 如果
    console.warn('need init');
    
    return;
  }
  requestInstance.update(config, plugins);

  return requestInstance;
}
