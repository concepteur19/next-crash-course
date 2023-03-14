import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Crash course</title>
        <meta name="description" content="zobel dev learn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  )
}
