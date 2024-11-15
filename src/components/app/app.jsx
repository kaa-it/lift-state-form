import styles from './app.module.css'
import {List} from "../list/list.jsx";
import {Form} from "../form/form.jsx";

function App() {
  return (
    <main className={styles.app}>
      <Form />
      <List />
    </main>
  )
}

export default App
