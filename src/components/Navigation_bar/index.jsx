import { useState } from 'react'
import styles from './nav.module.css'
import Links from '../Links'
import { articles } from '../../data/data'
import DateDisplay from '../Date'
import Hamburger from 'hamburger-react'

const Navigation = ({clickedCategory,clickedarticle}) => {
    const uniqueCategories = [...new Set(articles.map(item => item.category))]
    console.log(uniqueCategories)
    const [isOpen, setIsOpen] = useState(false);
  
    const handleHome = () => {
        clickedCategory(null);
        clickedarticle(null);
    }
    
    const handleClick = (item) => {
        clickedCategory(item);
        clickedarticle(null);
    }
    
    return (
        <div className={styles.nav}>
            <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>

            {isOpen && 
            <>
             <div className={styles.hamburger_links}>
            <Links title = "Home" onClick={handleHome} />
            {uniqueCategories.map((item, index) => (
            <Links key={index} title = {item} onClick={()=>handleClick(item)} />
            ))}
            </div>
            </>
        }

            <div className={styles.link_items}>
            <Links title = "Home" onClick={handleHome} />
            {uniqueCategories.map((item, index) => (
            <Links key={index} title = {item} onClick={()=>handleClick(item)} />
            ))}
            </div>
            <DateDisplay />
            
            </div>
    )
}

export default Navigation