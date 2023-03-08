import "@code-hike/mdx/styles"
import "../styles/custom-ch.css";

function MyApp({ Component, pageProps }) {
  return (
    <article
      style={{ maxWidth: 1536, margin: "0 auto", }}
    >
      <Component {...pageProps} />
    </article>
  )
}

export default MyApp
