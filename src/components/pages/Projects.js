import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    const location = useLocation();
    let message = "";
    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setProjects(data);
            })
            .catch((err) => console.log(err));
    }, []);

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
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    ))}
            </Container>
        </div>
    );
}
