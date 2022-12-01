import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
<Head> 
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  
  
</Head>
  return <Component {...pageProps} />
}

export default MyApp 
