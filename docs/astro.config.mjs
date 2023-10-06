import { defineConfig } from 'astro/config'
import config from './config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import astroI18next from 'astro-i18next'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: config.site,
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    react(),
    mdx(),
    astroI18next()
  ],
  scopedStyleStrategy: 'where',
  compressHTML: false
})