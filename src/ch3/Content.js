import {useState} from 'react';
import styles from './content.module.css';
import UnitControl from './unitControl';
import Footer from './Footer';


const Content = () => {
    let [mbps,setMbps] = useState({mbps:0});
    let [mbs,setMbs] = useState({mbs:0});
    let [status,setStatus] = useState({st:"slow"});
    const handleInput = (e)=>{
        setMbps({mbps:e.target.value});
        setMbs({mbs:e.target.value / 8})
        if(mbs.mbs>200){
            setStatus({st:"fast"});
        }else{
            setStatus({st:"slow"});
        }
    }
    return (
    <>
        <div className={styles.content}>
            <div className={styles.btnPanel}>
                <button className={styles.btn}>Mbps</button>
                <button className={styles.btn}>MB/s</button>
            </div>
            <div className={styles.btnPanel}>
                <UnitControl type="in" val={mbps.mbps} handleInput={handleInput}/>
                <UnitControl type="out" val={mbs.mbs}/>
            </div>
        </div>
        <Footer status={status.st}/>
    </>
)}

export default Content;