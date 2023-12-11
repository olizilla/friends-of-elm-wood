// import cloudflare from '@astrojs/cloudflare'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // adapter: cloudflare(),
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  site: 'https://friendsofelmwood.org'
})
