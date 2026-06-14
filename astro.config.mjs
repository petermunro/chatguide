// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Chat Guidelines',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/petermunro/chatguide' }],
			sidebar: [
				'index',
				{
					label: 'Guides',
					items: [
						{ autogenerate: { directory: 'guides' } }
					],
				},
			],
		}),
	],
});
