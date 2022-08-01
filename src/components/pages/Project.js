import styles from "./Project.module.css";
import Loading from "../layout/Loading";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../layout/Container";

export default function Project() {
    const { id } = useParams();

    const [project, setProject] = useState([]);

    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data);
                })
                .catch((err) => console.log(err));
        }, 1000);
    }, [id]);

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? "Editar Projeto" : "Fechar"}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                    <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                    <span>Total de Orçamento: R$</span> {project.budget}
                                    </p>
                                    <p>
                                    <span>Total Utilizado: R$</span> {project.costs}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>Form para edição</div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
