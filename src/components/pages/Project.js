import styles from "./Project.module.css";
import Loading from "../layout/Loading";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import { parse, v4 as uuidv4 } from "uuid";
import ServiceCard from "../service/ServiceCard";

export default function Project() {
    const { id } = useParams();

    const [project, setProject] = useState([]);

    const [services, setServices] = useState([]);

    const [showProjectForm, setShowProjectForm] = useState(false);

    const [showServiceForm, setShowServiceForm] = useState(false);

    const [message, setMessage] = useState();

    const [typeMessage, setTypeMessage] = useState();

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
                    setServices(data.services);
                })
                .catch((err) => console.log(err));
        }, 1000);
    }, [id]);

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function removeService(id, cost) {
        const servicesUpdate = project.services.filter(
            (service) => service.id !== id
        );
        const projectUpdated = project;
        projectUpdated.services = servicesUpdate;
        projectUpdated.costs =
            parseFloat(projectUpdated.costs) - parseFloat(cost);
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(projectUpdated),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated);
                setServices(servicesUpdate);
                setMessage("Serviço removido com sucesso!");
                setTypeMessage("success");
            })
            .catch((err) => console.log(err));
    }

    function editPost(project) {
        setMessage("");
        //budget validation
        if (project.budget < project.costs) {
            setMessage(
                "O orçamento não pode ser menor que o custo do projeto!"
            );
            setTypeMessage("error");
            return false;
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
                setShowProjectForm(false);
                setMessage("Projeto Atualizado com sucesso!");
                setTypeMessage("success");
            })
            .catch((err) => console.log(err));
    }

    function createService(project) {
        setMessage("");
        //last service
        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.costs) + parseFloat(lastServiceCost);

        //maximum value validation
        if (newCost > parseFloat(project.budget)) {
            setMessage("Orçamento ultrapassado, verifique o valor do serviço.");
            setTypeMessage("error");
            project.services.pop();
            return false;
        }
        //add service cost to project costs
        project.costs = newCost;
        //update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false);
                //exibir os serviços
                //console.log(data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        {message && (
                            <Message type={typeMessage} text={message} />
                        )}
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            <button
                                className={styles.btn}
                                onClick={toggleProjectForm}
                            >
                                {!showProjectForm ? "Editar Projeto" : "Fechar"}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria:</span>{" "}
                                        {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: R$</span>{" "}
                                        {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: R$</span>{" "}
                                        {project.costs}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Concluir Edição"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.serviceFormContainer}>
                            <h2>Adicione um serviço</h2>
                            <button
                                className={styles.btn}
                                onClick={toggleServiceForm}
                            >
                                {!showServiceForm
                                    ? "Adicionar Serviço"
                                    : "Fechar"}
                            </button>
                            <div className={styles.projectInfo}>
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText="Adicionar Serviço"
                                        projectData={project}
                                    />
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&
                                services.map((service) => (
                                    <ServiceCard
                                        name={service.name}
                                        cost={service.cost}
                                        id={service.id}
                                        description={service.description}
                                        key={service.id}
                                        handleRemove={removeService}
                                    />
                                ))}
                            {services.length === 0 && (
                                <p>Não há serviços cadastrados.</p>
                            )}
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
