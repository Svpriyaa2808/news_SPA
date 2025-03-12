import ShortArticle from "../ShortArticle"
import styles from './category.module.css'


const Category = ({title,categoryArray,clickedarticle}) => {
    const handleClick = (item) => {
        clickedarticle(item)
    }
    return (
        <div className={styles.category}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        {categoryArray.filter((item,index) => index < 3 ).map((item,index)=><div key={index} className={styles.article} onClick={() => handleClick(item)}><ShortArticle key={index} article={item} /></div>)}
        </div>
        
    )
}

export default Category