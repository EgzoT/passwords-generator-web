import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "autoUpdate",
  devOptions: {
    enabled: true
  },
	includeAssets: ["favicon.ico", "logo192.png", "logo512.png"],
	manifest: {
		name: "Web passwords generator",
		short_name: "Passwords generator",
		description: "Password generating application.",
		icons: [
			{
        "src": "favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": "logo192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "logo512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
		],
		theme_color: "#000000",
		background_color: "#ffffff",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    host: true,
    port: 3000
  }
})
