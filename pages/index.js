import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Body from '../components/Body'
import axios from 'axios'

const Home = ({pokemon}) => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Jdonl OG Pokemon</title>
        <meta name="description" content="OG Pokemon List" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body pokemon={pokemon} />
    </div>
  )  
}

export const getServerSideProps = async () => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200')

  return {
    props: { 
      pokemon: res.data,
    },
  };
};


export default Home

