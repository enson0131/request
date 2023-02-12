import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts', // 库的入口
      name: 'CommRequest', // 暴露的全局变量
      fileName: 'commRequest', // 是输出的包文件名
      formats: ['es', 'umd'] // 输出的文件格式
    }
  }
})
