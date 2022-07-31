import styles from "./Message.module.css";
import { useState, useEffect } from "react";
export default function Message({ type, text }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!text) {
            setVisible(false);
            return;
        }
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [text]);

    return (
        <>
            {visible && (
                <div className={`${styles[type]} ${styles.message}`}>
                    <p>{text}</p>
                </div>
            )}
        </>
    );
}
