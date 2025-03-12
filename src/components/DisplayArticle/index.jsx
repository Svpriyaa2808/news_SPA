import { getImageUrl } from "../../utils/function"
import styles from './displayarticle.module.css'

const DisplayArticle = ({displayArticle}) => {
    console.log(displayArticle)
    let displayStory = displayArticle
    return (
        <div className={styles.article_container}>
            <div className={styles.article_heading}>
                <div className={styles.heading}>
                    <h2>{displayStory.headline}</h2>
                </div>
                <div className={styles.category}>
                    <p>Category : <span>{displayStory.category}</span></p>
                </div>
            </div>
           
            <div className={styles.article_image}>
                <img src={getImageUrl(displayStory.image)} alt={displayStory.image}></img>
            </div>
            <h5>{displayStory.deck}</h5>
            <p>{displayStory.story}</p>
        </div>
        
    )
}

export default DisplayArticle