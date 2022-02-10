import { useState, useEffect } from 'react';
import { getPokeImageUrl } from "../util/fetchData";
import styles from '../styles/Body.module.scss'

const Card = ({name, index}) => {


    return (
        <div className={styles.show_selected}>
                        
            <div className={styles.pokemon_card}>
                <h1>{name}</h1>
                <img src={getPokeImageUrl(index)} alt="" />            
            </div>             
            
        </div>
    )
};

export default Card;
