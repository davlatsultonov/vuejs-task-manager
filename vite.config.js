import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode, ssrBuild }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [vue()],
    base: isProduction ? '/vue-task-manager/' : '',
  }
});