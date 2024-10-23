import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/2024/05/FishingGuide/" : "./",
  plugins: [vue()],
  build: {
    outDir: "FishingGuide",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    hmr: {
      overlay: false, // HMRのオーバーレイを無効にする
    },
    historyApiFallback: true,
  },
});
