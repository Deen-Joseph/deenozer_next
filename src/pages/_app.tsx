import '@/styles/globals.css';
import '@/styles/PlayersDB.module.css';
import '@/styles/main.css';
import '@/styles/Home.module.css'
import '@/styles/FA.module.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
