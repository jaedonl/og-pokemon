import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../styles/MyPokemon.module.scss'
import Card from '../components/Card'
import { getPokemonDetail } from '../util/fetchData';

const mypokemon = ({myPokemon}) => {
  console.log(myPokemon);
  return (
    <div className={styles.myPokemon}>
      {myPokemon.map(singlePokemon => (
        // <div className={styles.pokeCard}>
        //   <h2>{pokemon.pokemon.name}</h2>
        //   <div className={styles.imageWrapper}>
        //     <img src={pokemon.sprites.front_default} alt="" width="150" height="150" />
        //   </div>
        // </div>
        <Card info={singlePokemon} />
      ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/mypokemon')

  return {
    props: { 
      myPokemon: res.data,      
    },
  };
};


export default mypokemon