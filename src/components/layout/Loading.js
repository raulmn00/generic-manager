import styles from "./Loading.module.css";
import loadingImg from "../../img/loading.svg";

export default function Loading() {
    return (
        <div className={styles.loaderContainer}>
            <img src={loadingImg} alt="loading" className={styles.loader} />
        </div>
    );
}
