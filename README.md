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