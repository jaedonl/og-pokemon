import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerWrapper}>
          
          <h1>OG Pokemon</h1>

          <div className={styles.round}>
              <div>
                  <div className={styles.innerRound}></div>
              </div>            
          </div>
        </div>
    </header>   
  )
}

export default Header