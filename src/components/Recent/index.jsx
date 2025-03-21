import styles from './recent.module.css'

const Recent = ({article,setstate}) => {  
    console.log(article)

    return (
        <>
        
        <div className={styles.recent}>
            <h3 onClick={()=>setstate(article)}>{article.headline} </h3>
            <p>{article.deck}</p>
            <p className={styles.category}><span>Category : </span> {article.category}</p>
        </div>   
        </>
             
    )
}

export default Recent;