import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyExampleLib",
      fileName: "index",
    },
    outDir: "build",
  },
});
