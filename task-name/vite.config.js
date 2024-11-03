import {defineConfig} from "vite";
import {sync} from "glob";

export default defineConfig({
  root: "./src",
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: '../dist',
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    }
  }
});