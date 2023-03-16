import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>build your own @vue/reactivity</title>
        <meta name='keywords' content='next.js,vue.js,@vue/reactivity,code-hike' />
        <meta name='description' content='an introduction to the implementation principle of @vue/reactivity, and provided an interactive learning experience with code-hike.' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
