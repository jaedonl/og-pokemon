import Header from './Header'
// import Footer from './Footer'
import styles from '../styles/App.module.scss'

const Layout = ({children}) => {
  return ( //children is the component inside Layout Component in _app.js
    <div className={styles.template}>
      <Header/>
      {children}
      {/* <Footer/> */}
    </div>
  )
};

export default Layout;
