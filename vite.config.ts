import {defineConfig} from 'vite';import {defineConfig as defineVitestConfig} from 'vitest/config';
export default defineVitestConfig({base:process.env.GITHUB_PAGES==='true'?'/pilates-studio/':'./',test:{environment:'node'}});
