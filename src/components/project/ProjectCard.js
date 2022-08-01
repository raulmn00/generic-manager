import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

export default function ProjectCard({
    id,
    name,
    budget,
    category,
    handleRemove,
}) {
    return (
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento: R$ {budget}</span>
            </p>
            <p className={styles.categoryText}>
                <span className={`${styles[category.toLowerCase()]}`}></span>
                {category}
            </p>
            <div className={styles.projectCardActions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}
