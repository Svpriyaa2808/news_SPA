import styles from './shortarticle.module.css'
import { getImageUrl } from '../../utils/function';

const ShortArticle = ({article,setstate}) => {  
    return (
        <div className={styles.sports}>
            <img src={getImageUrl(article.image)} />
            <h3 onClick={()=>setstate(article)}>{article.headline}</h3>
            <p>{article.deck}</p>
        </div>        
    )
}

export default ShortArticle;