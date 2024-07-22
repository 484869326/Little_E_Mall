import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vitePluginTemplateInset from "@yck-web/vite-plugin-template-inset";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [uni()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "^/api": {
        target: "http://localhost:3333",
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames(chunkInfo) {
          if (chunkInfo.name && chunkInfo.name.endsWith(".css")) {
            return "css/[name]-[hash].css";
          }
          const imgExt = [
            ".png",
            ".jpg",
            ".jpeg",
            ".webp",
            ".svg",
            ".gif",
            ".bmp",
            ".tiff",
            "ico",
          ];
          if (imgExt.some((ext) => chunkInfo.name && chunkInfo.name.endsWith(ext))) {
            return "imgs/[name]-[hash].[ext]";
          }
          return "assets/[name]-[hash].[ext]";
        },
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("@dcloudi")) {
            return "dcloudi";
          } else if (id.includes("vue3-lazy")) {
            return "vue3-lazy";
          } else if (id.includes("pinia")) {
            return "pinia";
          } else if (id.includes("@vue")) {
            return "vue";
          } else {
            return "vendor";
          }
        },
      },
    },
  },
});
