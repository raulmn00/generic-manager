import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

export default function NewProject() {
    return (
        <>
            <section className={styles.newProjectContainer}>
                <h1>Criar Projeto</h1>
                <p>
                    Crie o seu projeto, defina o orçamento e sua categoria, para
                    depois adicionar os serviços.
                </p>
                <div>
                    <ProjectForm btnText="Criar Projeto" />
                </div>
            </section>
        </>
    );
}
