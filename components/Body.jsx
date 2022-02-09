import { useState, useEffect } from 'react'
import styles from '../styles/Body.module.scss'
import axios from 'axios'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';

const Body = ({pokemon, initial}) => {  
  // const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [select, setSelect] = useState(pokemon.results[0]);
  const [selPoke, setSelPoke] = useState({});
  const [selectIdx, setSelectIdx] = useState(1);

  useEffect(() => {
    setIsLoading(true)
    const fetchPokemon = async () => {      
      const res = await axios.get(`${select.url}`)
      setSelPoke(res.data)
      setIsLoading(false)
    }
    fetchPokemon()
  }, [selectIdx])

  const handleChange = (e) => {    
    setSelect(e.target.value);
    setSelectIdx(e.target.selectedIndex + 1)
  };

  useEffect(() => {
    console.log(select, selectIdx);
  },[select])
  


  return (
    <div className={styles.body}>
      <div className={styles.filter_wrapper}>
        <div className={styles.pokemon_list}>          
          <label id="demo-simple-select-label">Pokemon</label>
          <select              
              id="demo-simple-select"            
              label="Pokemon"
              value={select}
              onChange={handleChange}
              idx={selectIdx}
          >
            {
              pokemon.results.map((poke, idx) => (
                <option value={poke.name} key={idx} idx={idx + 1}>
                  {poke.name}
                </option>                  
              ))
            }
          </select>   
        </div>
      </div>
              
      <div className={styles.show_selected}>
        {
          <div>
            <h1>{select.name}</h1>
            <h3>{select.url}</h3>
              {/* <img src={select.sprites.front_default} alt="" width="200" height="200"/>             */}
          </div>
        }
         
            
      </div>
    </div>
  )
}

export default Body;