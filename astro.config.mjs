import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  markdown: {
    // Exclude all drafts in final build
    drafts: false
  },
  integrations: [mdx()],
  
  
  

}

);