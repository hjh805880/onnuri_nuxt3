export default defineNuxtConfig({
  // modules: ['@nuxtjs/turnstile'],
  // turnstile: {
  //   siteKey: 'process.env.TURNSTILE_SITE_KEY',
  // },
  // runtimeConfig: {
  //   turnstile: {
  //     secretKey: 'process.env.TURNSTILE_SECRET_KEY',
  //   },
  // },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "ko" },
      bodyAttrs: { class: "lg:max-w-[600px] mx-auto" },
      title: "금성대부중개 | 무직자대출 소액대출 비대면대출",

      // 메타태그 설정
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "description",
          content: "급한대출은 긴급대출, 무직자대출쉬운곳, 소액대출, 신용대출 한국대부중개협회 정식등록 업체 안심대출, 무방문,무서류,비대면대출",
        },
        {
          name: "keywords",
          content: "신용대출,여성주부,대출사업자,대출중고차,대출재대출,기대출과다자추가대출,소상공인대출,창업자대출,무서류대출,저신용자대출,군인대출,주부대출,법인대출,알바생대출,취준생대출,공무원대출,직장인대출",
        },
        {
          property: "og:title",
          content: "금성대부중개 | 무직자대출 소액대출 비대면대출",
        },
        {
          property: "og:description",
          content: "급한대출은 긴급대출, 무직자대출쉬운곳, 소액대출, 신용대출 한국대부중개협회 정식등록 업체 안심대출, 무방문,무서류,비대면대출",
        },
        {
          property: "og:url",
          content: "https://onloan.kr",
        },
        {
          property: "og:image",
          content: "/og_img.png",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "금성대부중개 | 무직자대출 소액대출 비대면대출",
        },

        // 파비콘 설정
        { name: "msapplication-TileColor", content: "#ffffff" },
        {
          name: "msapplication-config",
          content: "/favicon/browserconfig.xml",
        },
        { name: "theme-color", content: "#ffffff" },
      ],

      // 링크 설정
      link: [
        { rel: "canonical", href: "https://onloan.kr" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },

        // 파비콘 설정
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#946efa",
        },
        { rel: "shortcut icon", href: "/favicon.ico" },
      ],

      // 스크립트 설정
      script: [
        {
          src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
          type: "text/javascript",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
