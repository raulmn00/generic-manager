import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Projects() {
    const location = useLocation();
    let message = "";
    if (location.state) {
        message = location.state.message;
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h2>Ours Projects</h2>
                <LinkButton
                    linkButton="/newproject"
                    textButton="Criar Projeto"
                />
            </div>
            {message && <Message type="sucess" text={message} />}

            <Container customClass="start">
                <p>Projetos....</p>
            </Container>
        </div>
    );
}
