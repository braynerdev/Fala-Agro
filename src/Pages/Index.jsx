import { Link } from "react-router-dom"
import styles from "../Pages/Index.module.css"

export function Index() {
    return (
        <div className={styles.indexContet}>
            <p>Este será o nosso index temporário. Enquanto os designs estão fazendo o protótipo, usaremos esta página para facilitar a navegação entre as pages.</p>
            <Link className={styles.linksIndex} to="/login">Login</Link>
            <Link className={styles.linksIndex} to="*">Page Not Found</Link>
            <Link className={styles.linksIndex} to="/area-do-vendedor">Criar eventos</Link>
        </div>
    )
}