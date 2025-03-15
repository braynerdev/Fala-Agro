import styles from './FormLogin.module.css';

export function FormLogin(){
    return(
        <div className={styles.FormContent}>
            <form method="post">
                <input placeholder="Username" type="text" name="username" id="id_username" />
                <input type="password" name="senha" id="id_senha" />
                <button type="submit">Entrar</button>
            </form>
            <div className={styles.LogarComOutros}>
                <p>Logar com outros métodos</p>
                <a href="#">Logar com o Google</a>
                <a href="#">Logar com o Facebook</a>
            </div>
        </div>
    );
}