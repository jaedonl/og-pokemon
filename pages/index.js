import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Jdonl OG Pokemon</title>
        <meta name="description" content="OG Pokemon List" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body/>

    </div>
  )
}
