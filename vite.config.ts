import {defineConfig} from 'vitest/config';
export default defineConfig({base:process.env.GITHUB_PAGES==='true'?'/pilates-studio/':'./',test:{environment:'node',exclude:['tests/**','node_modules/**']}});
