// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    starlight({
      title: "Mighty",
      plugins: [starlightLinksValidator()],
      logo: {
        src: "@/assets/mighty.svg",
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Hello, World!",
          autogenerate: { directory: "guides/hello-world" },
        },
        {
          label: "Core Concepts",
          autogenerate: { directory: "guides/core-concepts" },
        },
        {
          label: "Backend Adapters",
          autogenerate: { directory: "guides/backend-adapters" },
        },
        {
          label: "Advanced Usage",
          autogenerate: { directory: "guides/advanced-usage" },
        },
        {
          label: "Extra topics",
          autogenerate: { directory: "guides/extra-topics" },
        },
        {
          label: "Examples & Recipes",
          autogenerate: { directory: "guides/examples-recipes" },
        },
      ],
    }),
  ],
});
