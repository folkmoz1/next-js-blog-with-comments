import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Component {...pageProps} />
       <style jsx global>{`#__next{ overflow: hidden }`}</style>
    </>
  )
}

export default MyApp
