import { useState, useEffect } from 'react'
import styles from '../styles/Body.module.scss'
import axios from 'axios'

const pokelist = ({pokemon}) => {

    console.log(pokemon);
  return (
    <div>pokelist</div>
  )
}


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
    return {
      props: { pokemon: res.data },
    };
  };
  

export default pokelist