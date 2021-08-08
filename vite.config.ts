import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteComponents, {
  AntDesignVueResolver,
} from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mk-vue/',
  plugins: [
    Vue(),
    ViteComponents({
      customComponentResolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
});
