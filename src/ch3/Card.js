import {useState} from 'react';
import styles from './card.module.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Card = () => (
    <div className={styles.card}>
        <Header/>
        <Content/>
        <Footer/>
    </div>
)

export default Card;
     