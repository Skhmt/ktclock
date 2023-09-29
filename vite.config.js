import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			includeAssets: [
				'ktcalc.png'
			],
			manifest: {
				name: 'Kill Team Clock',
				short_name: 'KTClock',
				description: 'Chess-clock like app for Kill Team',
				theme_color: '#000000',
				icons: [
					{
						src: 'ktclock192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'ktclock512.png',
						sizes: '512x512',
						type: 'image/png'
					},
				]
			},
			registerType: 'autoUpdate'
		})
	],
	base: './'
})
