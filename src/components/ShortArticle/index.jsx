import styles from './shortarticle.module.css'
import { getImageUrl } from '../../utils/function';

const ShortArticle = ({article,onClick}) => {  
    return (
        <div className={styles.sports}>
            <img src={getImageUrl(article.image)} />
            <h3 onClick={onClick}>{article.headline}</h3>
            <p>{article.deck}</p>
        </div>        
    )
}

export default ShortArticle;