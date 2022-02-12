import axios from 'axios'
import styles from '../styles/MyPokemon.module.scss'
import Card from '../components/Card'

const mypokemon = ({myPokemon}) => {
  return (
    <div className={styles.myPokemon}>
      {myPokemon.map(singlePokemon => (
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