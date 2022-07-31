import styles from "./Select.module.css";

export default function Select({ text, name, options, handleOnChange, value }) {
    return (
        <>
            <div className={styles.selectControl}>
                <label htmlFor={name}>{text}</label>
                <select
                    name={name}
                    id={name}
                    onChange={handleOnChange}
                    value={value || ""}
                >
                    <option>Selecione uma opção</option>
                    {options.map((opt) => (
                        <option value={opt.id} key={opt.id}>
                            {opt.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
