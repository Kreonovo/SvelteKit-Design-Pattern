import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self'],
				'default-src': ['self', 'https:'],
				'connect-src': ['self', 'https:'],
				'font-src': ['self', 'https://fonts.gstatic.com', 'data:'],
				'frame-src': ['youtube.com', 'www.youtube.com', 'www.googletagmanager.com'],
				'child-src': ['none'],
				'img-src': ['self', 'data: https:', 'https://i.dummyjson.com', 'i.dummyjson.com'],
				'media-src': ['self', 'https://i.dummyjson.com', 'i.dummyjson.com'],
				'object-src': ['none'],
				'style-src': ['self', 'unsafe-inline', 'fonts.gstatic.com', 'fonts.googleapis.com'],
				'worker-src': ['self'],
				'form-action': ['self'],
				'base-uri': ['self'],
				'frame-ancestors': ['none'],
				'report-to': ['self'],
				'report-uri': ['self'],
				'upgrade-insecure-requests': true
			}
		}
	}
};
