import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '@safe-globalThis/safe-ethers-adapters',
        "@safe-globalThis/safe-ethers-lib",
        '@safe-globalThis/safe-core-sdk',
      ],
    },
    outDir: 'dist', // Specify your desired output directory here
  },
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
