import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
    const navigate = useNavigate();

    function createProject(project) {
        project.costs = 0;
        project.services = [];
        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json)
            .then((data) => {
                //redirect
                //console.log(data)
                navigate("/projects", {
                    message: "Projeto criado com sucesso!",
                });
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <section className={styles.newProjectContainer}>
                <h1>Criar Projeto</h1>
                <p>
                    Crie o seu projeto, defina o orçamento e sua categoria, para
                    depois adicionar os serviços.
                </p>
                <div>
                    <ProjectForm
                        handleSubmit={createProject}
                        btnText="Criar Projeto"
                    />
                </div>
            </section>
        </>
    );
}
