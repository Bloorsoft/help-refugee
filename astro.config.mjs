import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://stargazers.club",
  integrations: [
    starlight({
      title: "Help Refugee",
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/bloorsoft/help-refugee",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
        ar: {
          label: "العربية",
          dir: "rtl",
        },
        farsi: {
          label: "فارسی",
          dir: "rtl",
        },
      },
      sidebar: [
        {
          label: "Getting Started",
		  translations: {
			"zh-cn": "入门指南",
			ar: "البدء",
			farsi: "شروع",
		  },
		  autogenerate: {
			directory: "getting-started",
		  },
        },
		{ label: 'Astro', link: 'https://astro.build/' },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
