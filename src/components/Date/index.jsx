import styles from './date.module.css'

const DateDisplay = () => {
    let currentDate = new Date().toLocaleDateString('en-gb',{weekday: "short",year:"numeric",month:"short",day:"numeric"});
    return (
        <div className={styles.date}>
            <p>{currentDate}</p>
        </div>
        
    )
     
}

export default DateDisplay;