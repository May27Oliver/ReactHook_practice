import {useState} from 'react';
import styles from './content.module.css';
import UnitControl from './unitControl';


const Content = () => (
    <div className={styles.content}>
        <div className={styles.btnPanel}>
            <button className={styles.btn}>Mbps</button>
            <button className={styles.btn}>MB/s</button>
        </div>
        <div className={styles.btnPanel}>
            <UnitControl/>
            <UnitControl/>
        </div>
    </div>
)

export default Content;