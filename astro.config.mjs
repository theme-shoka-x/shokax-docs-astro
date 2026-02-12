// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		AutoImport({
			imports: [
				{
					'@astrojs/starlight/components': [
						'Aside',
						'Badge',
						'Card',
						'CardGrid',
						'FileTree',
						'Icon',
						'LinkCard',
						'Steps',
						'Tabs',
						'TabItem',
					],
				},
			],
		}),
	],
});
