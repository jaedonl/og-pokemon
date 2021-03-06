import { useState, useEffect } from 'react'
import styles from '../styles/Body.module.scss'
import axios from 'axios'
import Card from './Card';
import { getPokemonDetail } from '../util/fetchData';

const Body = ({pokemon}) => {  
  const [selectIdx, setSelectIdx] = useState(1);
  const [pokeInfo, setPokeInfo] = useState(null)    
  
  useEffect(() => {
    const fetchPokemon = async () => {
      const getPoke = await getPokemonDetail(selectIdx)  
      setPokeInfo(getPoke)
    }
    fetchPokemon()    
  }, [selectIdx])

  const prevNext = (e) => {
    if (e.target.getAttribute('name') === 'prev') {
      if (selectIdx === 1) {
        setSelectIdx(pokemon.results.length)     
      } else setSelectIdx(selectIdx -1)      
    } 

    else if (e.target.getAttribute('name') === 'next') {
      if (selectIdx === pokemon.results.length) {
        setSelectIdx(1)   
      } else setSelectIdx(selectIdx +1)   
    }
  }

  
  return (
    <div className={styles.body}>
      <div className={styles.mylist_link}>
        <div className={styles.bar}></div>
        <h2>My Pokemon</h2>
      </div>
      
      <div className={styles.page_wrapper}>
        <div className={styles.pokemon_list}>          
          <label id="demo-simple-select-label">Pokemon</label>
          <select                            
              onChange={((e) => setSelectIdx(parseInt(e.currentTarget.value)))}      
              name={pokemon.results[selectIdx]}        
          >
            {
              pokemon.results.map((poke, idx) => (
                <option value={idx + 1} key={idx}>
                  {poke.name}
                </option>                  
              ))
            }
          </select>   
        </div>


        <Card info={pokeInfo}/>

        <div className={styles.nextPrev_button}>
          <button name="prev" onClick={prevNext}>Prev</button>
          <button name="next" onClick={prevNext}>Next</button>
        </div>

      </div>
    </div>
  )
}

export default Body;