import saving from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <section className={styles.homeContainer}>
                <h1>
                    Bem-vindo ao <strong>Generic Manager!</strong>
                </h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton linkButton="/newproject" textButton="Criar Projeto" />
                <img src={saving} alt="imagem saving" />
            </section>
        </>
    );
}
