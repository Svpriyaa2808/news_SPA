import styles from './header.module.css'
import SocialLinks from '../SocialIcons';
const Header = () => {
    return(
        <header className={styles.header}>
            <SocialLinks />
            <div className={styles.title}>
            <h1>News for Today</h1>
            </div>
            <div className={styles.phone_number}>
                1234-5678
            </div>
        </header>
    )
}

export default Header;