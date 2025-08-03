import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import {defineConfig} from "astro/config"


// https://astro.build/config
export default defineConfig({
    site: "https://miskamyasa.me", // Your custom domain
    base: "/",
    outDir: "./dist",
    integrations: [tailwind(), mdx()],
})
