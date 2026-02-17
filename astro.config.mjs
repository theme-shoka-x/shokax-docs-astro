// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import AutoImport from "astro-auto-import";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      locales: {
        root: {
          lang: "zh-CN",
          label: "简体中文",
        },
      },
      defaultLocale: "/",
      title: "ShokaX Astro Blog Theme",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/theme-shoka-x/astro-blog-shokax",
        },
      ],
      plugins: [
        starlightSidebarTopics([
          {
            label: "开始",
            link: "/start/guides/",
            icon: "rocket",
            items: [
              {
                label: "入门",
                autogenerate: { directory: "/start/guides/" },
              },
              {
                label: "部署",
                autogenerate: { directory: "/start/deploy/" },
              },
            ],
          },
					{
						label: '指南',
						link: '/guides/',
						icon: 'open-book',
						items: [
							{
								label: '功能',
								autogenerate: { directory: '/guides/features/' },
							},
							{
								label: '配置',
								autogenerate: { directory: '/guides/configs/' },
							}
						]
					}
        ]),
      ],
      editLink: {
        baseUrl: "https://github.com/theme-shoka-x/shokax-docs-astro/edit/master",
      },
      lastUpdated: true,
      components: {
        Footer: "./src/components/Footer.astro",
      },
    }),
    AutoImport({
      imports: [
        {
          "@astrojs/starlight/components": [
            "Aside",
            "Badge",
            "Card",
            "CardGrid",
            "FileTree",
            "Icon",
            "LinkCard",
            "Steps",
            "Tabs",
            "TabItem",
          ],
        },
      ],
    }),
  ],
});
