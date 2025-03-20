import styles from './mainarticle.module.css'
import { getImageUrl } from '../../utils/function'
import { featuredArticle } from '../../data/data'

const Main_article = ({article,setstate}) => {
 // setstate(article) is we are passing that article coming from another component .

console.log(article)
    return(
        <div className={styles.main_article}>
            <img src={getImageUrl(article.image)} />
            <h2 onClick={()=>setstate(article)}>{article.headline}</h2>
            <p>{article.deck}</p>
            <p><span className={styles.category}>Category:</span> {article.category}</p>
        </div>
    )
}

export default Main_article