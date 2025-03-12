import styles from './featured.module.css'
import Recent from '../Recent'
import Main_article from '../Main_article'
import { featuredArticle,sportsArticle,RecentArticle, articles } from '../../data/data'
import ShortArticle from '../ShortArticle'

const Featured = ({clickedarticle}) => {

    console.log(clickedarticle)
    console.log(featuredArticle)
    return(
        <div className={styles.featured}>

            
            <div className={styles.left}>
            <h4>Recent News</h4>
            {RecentArticle.map((item,index)=> <Recent key= {index} article={item} onClick={() => clickedarticle(item)}/>)}
            </div>
            {/* <Main_article article={featuredArticle} selectArticle = {clickedarticle} /> */}
            <div className={styles.center}>
            <h4>Main article</h4>
            {/* <Main_article article={featuredArticle} onClick={clickedarticle}/> */}
            {featuredArticle.map((item,index) => <Main_article key = {index} article={item} onClick={()=>clickedarticle(item)}/>)}
            </div>
                
            <div className={styles.right}>
            <h4>Sports News</h4>
            {sportsArticle.map((item,index)=> <ShortArticle key= {index} article={item} onClick={() => clickedarticle(item)}/>)}
            </div>
        </div>
    )
}

export default Featured