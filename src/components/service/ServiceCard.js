import styles from "../project/ProjectCard.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function ServiceCard({
    id,
    name,
    cost,
    description,
    handleRemove,
}) {
    const remove = (e) => {};
    return (
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Custo: R${cost}</span>
            </p>
            <p>
                <span>Descrição: {description}</span>
            </p>
            <div className={styles.projectCardActions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    );
}
