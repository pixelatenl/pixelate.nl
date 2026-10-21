# pixelate.nl

The company website of Pixelate BV.
Live at [pixelate.nl](https://pixelate.nl/).

## Stack

- Nuxt 4 (Vue 3), static site generation
- Plain CSS, no UI framework
- GitHub Actions workflow that builds and uploads the static site on every push to `main`

## Build setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# generate the static site into .output/public/
npm run generate
```

## Deployment

The generated site is built automatically by GitHub Actions (artifact: `pixelate-nl-dist`).
Deployment is a manual FTP/SFTP upload of `.output/public/` to the Apache host.
The Apache configuration lives in `public/.htaccess` and ships with the generated site.

## Copyright

Copyright 2003 - 2026 Pixelate BV, Roland Poot. All rights reserved.

This repository contains the design and content of the Pixelate BV company website, together with the source code that renders it.
The website is the creative work of Pixelate BV: its visual identity, layout, typography, copy, imagery, and code are published here for viewing and reference only.
No license is granted: you may not copy, reuse, modify, or redistribute the design, the content, or the code, in whole or in part, without prior written permission from Pixelate BV.