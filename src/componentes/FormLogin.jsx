import styles from './FormLogin.module.css';


export function FormLogin(){
    return(
        <div className={styles.FormContent}>
            <form method="post" autoComplete='off'>
                <input placeholder="username" type="text" name="username" id="id_username" />
                <input placeholder="senha" type="password" name="senha" id="id_senha" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}