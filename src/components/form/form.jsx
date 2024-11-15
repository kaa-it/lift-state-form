import styles from './form.module.css';
import {useState} from "react";

export const Form = () => {
    const [values, setValues] = useState({
        task: "",
    });

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleTest = () => {
        setValues({...values, task: undefined});
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="task">Новая задача:</label>
            <input id="task" className={styles.input} type="text"
                   name="task"
                   value={values.task}
                   onChange={handleChange}/>
            <button type="submit">Добавить</button>
            <button type="button" onClick={handleTest}>Тест</button>
        </form>
    )
}