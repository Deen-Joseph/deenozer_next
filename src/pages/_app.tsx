import '@/styles/globals.css';
import '@/styles/PlayersDB.module.css';
import '@/styles/Home.module.css'
import '@/styles/FA.module.css';
import '@/styles/Clubs.module.css';
import '@/styles/Footer.module.css';
import '@/styles/Header.module.css';
import '@/styles/LoginReg.module.css';
import '@/styles/Common.module.css';
import '@/styles/LogRegTab.module.css';
import type { AppProps } from 'next/app'
import Navigation from "../components/navigation/Navigation"

export default function App({ Component, pageProps }: AppProps) {

  
  return(
  <Navigation>
    <Component {...pageProps} />
  </Navigation>)
  
}
