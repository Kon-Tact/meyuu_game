import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/meyuu_game/", // 🔥 Ajoute cette ligne pour corriger les chemins
});