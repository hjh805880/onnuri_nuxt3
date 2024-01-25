// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '온누리대부중개 | 무직자대출 소액대출 비대면대출',

      // 메타태그 설정
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            '급한대출은 긴급대출, 무직자대출쉬운곳, 소액대출, 신용대출 한국대부중개협회 정식등록 업체 안심대출, 무방문,무서류,비대면대출',
        },
        {
          property: 'og:title',
          content: '온누리대부중개 | 무직자대출 소액대출 비대면대출',
        },
        {
          property: 'og:url',
          content: 'https://onnuriloan.com',
        },
        {
          property: 'og:image',
          content: 'public/og_img.png',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: '온누리대부중개 | 무직자대출 소액대출 비대면대출',
        },

        // 파비콘 설정
        { name: 'msapplication-TileColor', content: '#ffffff' },
        {
          name: 'msapplication-config',
          content: '/favicon/browserconfig.xml',
        },
        { name: 'theme-color', content: '#ffffff' },
      ],

      // 링크 설정
      link: [
        { rel: 'canonical', href: 'https://onnuriloan.com' },

        // 파비콘 설정
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        {
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#946efa',
        },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
      ],
      script: [
        { src: 'assets/js/flowbite.min.js', type: 'text/javascript' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
