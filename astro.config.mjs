// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ShokaX Astro Blog Theme',
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/theme-shoka-x/astro-blog-shokax' }],
			sidebar: [
				{
					label: '教程',
					autogenerate: { directory: 'guides' },
				},
				{
					label: '部署',
					autogenerate: { directory: 'deploy' },
				},
				{
					label: '配置',
					autogenerate: { directory: 'configs' },
				},
				{
					label: '功能',
					autogenerate: { directory: 'features' },
				},
				{
					label: '扩展',
					autogenerate: { directory: 'extra' },
				},
			],
			editLink: {
				baseUrl: "https://github.com/theme-shoka-x/shokax-docs-astro/edit/master"
			},
			lastUpdated: true,
			components: {
				Footer: './src/components/Footer.astro',
			},
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
