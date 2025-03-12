import styles from './link.module.css'

const Links = ({title,onClick}) => {

    return (
       
        <a className={styles.links} onClick={onClick}>{title}</a>
      
    )
}

export default Links;