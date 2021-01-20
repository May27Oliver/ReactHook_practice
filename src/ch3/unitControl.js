import styles from './content.module.css';

const UnitControl = ({type,val,handleInput})=>(
    <div className={styles.infoBox}>
        <div className={styles.title}>set</div>
        {type==="in"?<input className={styles.number} value={val} onChange={handleInput}></input>:<div className={styles.number}>{val}</div>}
    </div>
)
export default UnitControl;