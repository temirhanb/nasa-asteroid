import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";

import localFont from 'next/font/local'
import { Title } from "../component/MainPage/Title/index";

const helvetica = localFont({src: '../styles/font/helvetica_regular.otf'})

const queryClient = new QueryClient()
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4gApTSwf4UgSOc2RGbkuc969RHyvF9FM",
  authDomain: "asteroid-ee981.firebaseapp.com",
  projectId: "asteroid-ee981",
  storageBucket: "asteroid-ee981.appspot.com",
  messagingSenderId: "88887739487",
  appId: "1:88887739487:web:9e0114cd2d282f6ead87ea",
  measurementId: "G-LBFJ21SV88"
};
const app = initializeApp(firebaseConfig);

export default function App({Component, pageProps}: AppProps) {

  return <QueryClientProvider client={queryClient}>
    <div className={helvetica.className}>
      <Title/>
      <Component {...pageProps} />
    </div>
  </QueryClientProvider>

}
