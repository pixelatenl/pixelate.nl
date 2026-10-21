# pixelate.nl

The company website of Pixelate BV, the independent studio of Roland Poot.
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

Copyright 2003 - 2026 Pixelate BV, All rights reserved.

This repository contains the source code and content of the Pixelate BV company website.
The code and content are published here for viewing and reference only.
No license is granted: you may not reuse, modify, or redistribute the code, the design,
the copy, or the assets without prior written permission from Pixelate BV.