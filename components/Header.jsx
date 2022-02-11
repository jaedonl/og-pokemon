import styles from '../styles/Header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerWrapper}>
          
          <Link href="/">
            <h1>OG Pokemon</h1>
          </Link>

          <Link href='/mypokemon'>
            <div className={styles.round}>
                <div>
                    <div className={styles.innerRound}></div>
                </div>            
            </div>
          </Link>          
        </div>
    </header>   
  )
}

export default Header