import styles from "../project/ProjectForm.module.css";
import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
export default function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({});

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type="text"
                    name="name"
                    text="Nome do serviço"
                    placeholder="Digite o nome do serviço"
                    handleOnChange={handleChange}
                />
                <Input
                    type="number"
                    name="cost"
                    text="Custo do serviço"
                    placeholder="Digite o valor total"
                    handleOnChange={handleChange}
                />
                <Input
                    type="text"
                    name="description"
                    text="Descrição do Serviço"
                    placeholder="Digite a descrição do serviço"
                    handleOnChange={handleChange}
                />
                <SubmitButton text={btnText} />
            </form>
        </div>
    );
}
