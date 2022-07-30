import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaFileCode } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p>Feito orgulhosamente por: Raul Mariaci Neto! &copy; 2022</p>
                <span><FaFileCode/> <FaLinkedin/> <FaGithub /></span>
            </footer>
        </>
    );
}
