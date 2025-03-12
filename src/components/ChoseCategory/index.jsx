import { getImageUrl } from "../../utils/function"
import styles from './chosecategory.module.css'
const ChoseCategory = ({displayCategory,clickedarticle}) => {
   console.log(displayCategory)
    return (
       <>
            {displayCategory.map((item,index) =>
                <div className={styles.category}  key = {index}>
                    <h2 onClick={()=>clickedarticle(item)}>{item.headline}</h2>
                    <img src = {getImageUrl(item.image)} alt={item.image}></img>
                    {/* <h4>{item.deck }</h4>
                    <p>{item.story}</p> */}
                 </div>
            
             )}

</>
    )
}

export default ChoseCategory