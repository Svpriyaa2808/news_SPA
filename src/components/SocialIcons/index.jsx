import styles from './social.module.css'
import { SocialLogo } from 'social-logos';

const SocialLinks = () => {
    return(
        <div className={styles.social_icons} >
             <SocialLogo icon="facebook" size={ 48 } />
             <SocialLogo icon="instagram" size={ 48 } />
             <SocialLogo icon="twitter" size={ 48 } />
        </div>
    )
}

export default SocialLinks;