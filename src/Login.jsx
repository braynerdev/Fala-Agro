import {FormLogin} from './componentes/FormLogin';
import styles from './Login.module.css';

export function Login(){
    return(
        <div className={styles.FormLogin}>
            <FormLogin />
        </div>
    );
}