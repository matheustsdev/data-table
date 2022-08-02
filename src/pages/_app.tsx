import type { AppProps } from 'next/app'
import { UsersProvider } from '../hook/useUsers'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <UsersProvider>
    <Component {...pageProps} />
  </UsersProvider>
  )
}

export default MyApp
