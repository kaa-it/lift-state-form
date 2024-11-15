import styles from "./list.module.css";
import {useState} from "react";

export const List = () => {
    const [tasks] = useState([
        "Пройти теорию",
        "Сделать проектную работу",
        "Сдать на ревью"
    ]);

    return (
        <ul className={styles.list}>
            {tasks.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}