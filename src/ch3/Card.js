import {useState} from 'react';
import styles from './card.module.css';
import Header from './Header';
import Content from './Content';

const Card = () => {
    return (
        <div className={styles.card}>
            <Header/>
            <Content />
        </div>
    )
}

export default Card;
     