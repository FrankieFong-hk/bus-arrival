import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   fs: {
  //     cachedChecks: false,
  //   },
  // },
  resolve: {
    alias: [
      {
        find: /^@nectary\/components\/(.*)$/,
        replacement: "@nectary/components/$1/index",
      },
    ],
  },
});
