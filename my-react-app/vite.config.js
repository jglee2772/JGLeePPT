import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Azure Static Web Apps 배포용 (루트 경로)
  // GitHub Pages 사용 시: base: '/JGLeePPT/'
  base: '/',
})
