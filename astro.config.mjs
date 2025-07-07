// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
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
          label: "Getting Started",
          autogenerate: { directory: "guides/getting-started" },
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
