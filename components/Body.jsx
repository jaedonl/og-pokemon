import { useState, useEffect } from 'react'
import styles from '../styles/Body.module.scss'
import axios from 'axios'
import Card from './Card';
import { getPokemonDetail } from '../util/fetchData';

const Body = ({pokemon}) => {  
  const [curPokemon, setCurPokemon] = useState();
  const [selectIdx, setSelectIdx] = useState(1);
  

  useEffect(() => {
    const fetchPokemon = async () => {
      // const getPoke = await getPokemonDetail(selectIdx)            
      // setCurPokemon(getPoke.name)
      setCurPokemon(pokemon.results[selectIdx-1].name)
    }
    fetchPokemon()

  }, [selectIdx])

  
  return (
    <div className={styles.body}>
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


        <Card name={curPokemon} index={selectIdx} />

        <div className={styles.nextPrev_button}>
          <button>Prev</button>
          <button>Next</button>
        </div>

      </div>
    </div>
  )
}

export default Body;