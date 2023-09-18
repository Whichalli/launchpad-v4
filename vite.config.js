import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '@safe-globalThis/safe-ethers-adapters', // Add this line
        '@thirdweb-dev/wallets',
        '@safe-global/safe-core-sdk',
      ],
    },
  },
  
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
