import axios from "axios";
import { useEffect, useState } from 'react';

const useFetch = (url) => { // url = 'https://pokeapi.co/api/v2/pokemon'
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
              const res = await axios.get(url);            
              
              console.log(res.data.results);
              setPokemon(res.data.results);
              setLoading(false);

            } catch (error) {
              setServerError(error);
              setLoading(false);
            }
        };
    
        fetchData();
    }, [url]);

    return { loading, pokemon, serverError };    
}

export default useFetch

