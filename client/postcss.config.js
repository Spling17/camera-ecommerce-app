// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
//   },
// }

import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer(),
  ],
});