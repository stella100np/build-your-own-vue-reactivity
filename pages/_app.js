import "@code-hike/mdx/styles"
import "../styles/custom-ch.css";
import "../styles/globals.css"


function MyApp({ Component, pageProps }) {
  return (
    <article
      className="prose md:prose-lg lg:prose-xl  prose-slate max-w-7xl  mx-auto"
    >
      <Component {...pageProps} />
    </article>
  )
}

export default MyApp
