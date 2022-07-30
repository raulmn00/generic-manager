import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

export default function LinkButton({ textButton, linkButton }) {
    return (
        <>
            <Link className={styles.btn} to={linkButton}>{textButton}</Link>
        </>
    );
}
