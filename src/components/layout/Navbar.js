import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";
export default function Navbar() {
    return (
        <>
            <nav className={styles.navBar}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="logo do projeto" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="/dev">Developer</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/newproject">New Project</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </>
    );
}
