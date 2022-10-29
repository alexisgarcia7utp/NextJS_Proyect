import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContextProvider } from '../components/context/UserContext';

function App({ Component, pageProps }: AppProps) {
  return (<UserContextProvider>
    <Component {...pageProps} />
  </UserContextProvider>)
}


export default App