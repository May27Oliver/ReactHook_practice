import styles from './footer.module.css';

const Footer = ({status}) => (
    <div className={styles.footer}>
        {status}
    </div>
)

export default Footer;