import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";

import localFont from 'next/font/local'
import { Title } from "../component/MainPage/Title/index";

const helvetica = localFont({src: '../styles/font/helvetica_regular.otf'})

const queryClient = new QueryClient()

export default function App({Component, pageProps}: AppProps) {

  return <QueryClientProvider client={queryClient}>
    <div className={helvetica.className}>
      <Title/>
      <Component {...pageProps} />
    </div>
  </QueryClientProvider>

}
