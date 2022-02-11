import { useState, useEffect } from 'react';
import { getPokeImageUrl } from "../util/fetchData";
import styles from '../styles/Card.module.scss'
import axios from 'axios'

const Card = ({info}) => {
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        info ? setIsLoading(false) : ''        

        console.log(info);
    }, [info])
    
    const addToList = (e) => {
        e.preventDefault()
        try {
            axios.post("/api/mypokemon", info)
            alert('succefully added to your PokeBall!!')
        } catch(err) {
            console.log(err)
        }
    }

    return (        
        <div className={styles.show_selected}>          
            {isLoading || !info     ?   
                <h2>Loading...</h2> :       

                <div className={styles.pokemon_card}>
                    <div className={styles.pokemon_name}>
                        <h1>{info.name}</h1>
                        <span>no.{info.order}</span> 
                    </div>
                    <div className={styles.image_wrapper}>
                        <button onClick={addToList}>Add to Pokeball</button>
                        {/* <img src={getPokeImageUrl(index)} alt="" />       */}
                        <img src={info.sprites.front_default} alt="" />      
                    </div>
                    <div className={styles.pokemon_info_wrapper}>
            
                            <div className={styles.pokemon_info}>

                                <div className={styles.info_section}>
                                    <h4>Types</h4>
                                    {info.types.map((element, idx) => (
                                        <p>{element.type.name}</p>
                                    ))}
                                </div>

                                <div className={styles.info_section}>
                                <h4>Stats</h4>
                                {info.stats.map((element, idx) => (
                                    <div className={styles.statRow}>
                                        {element.stat.name.includes('special-') 
                                            ? <span>{element.stat.name.replace('special', 's')}</span>
                                            : <span>{element.stat.name}:</span>}                                
                                        <span>{element.base_stat}</span>                                
                                    </div>                                                        
                                ))}
                                </div>
                    
                                <div className={styles.info_section}>
                                    <h4>Abilities</h4>
                                    {info.abilities.map((element, idx) => (
                                        <p>{element.ability.name}</p>
                                    ))}
                                </div>
                            </div>                   
                    </div>      
                </div>             
            }
        </div>
    )
};

export default Card;
