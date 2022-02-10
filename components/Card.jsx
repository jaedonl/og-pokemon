import { useState, useEffect } from 'react';
import { getPokeImageUrl } from "../util/fetchData";
import styles from '../styles/Body.module.scss'

const Card = ({name, index, info}) => {
    const [isLoading, setIsLoading] = useState(false)
    
    
    useEffect(() => {
        setIsLoading(true)
        info ? setIsLoading(false) : ''        
    }, [info])
    
    return (
        <div className={styles.show_selected}>
                        
            <div className={styles.pokemon_card}>
                <h1>{name}</h1>
                <img src={getPokeImageUrl(index)} alt="" />      
                
                <div className={styles.pokemon_info_wrapper}>
                    {isLoading || !info
                        ?   
                        <h2>Loading...</h2>
                        :   
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
                        </div>}                    
                </div>      
            </div>             
            
        </div>
    )
};

export default Card;
