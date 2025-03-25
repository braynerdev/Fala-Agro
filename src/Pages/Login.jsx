import styles from '../Pages/Login.module.css';
import LogoFalaAgro from '../img/LogoFalaAgro.svg'
import { Facebook, Google } from 'react-bootstrap-icons'

export function Login() {
    return (
        <div className={styles.FormLogin}>
            <div className={styles.content}>
                <img src={LogoFalaAgro} />
                <div className={styles.FormContent}>
                    <form method="post" autoComplete='off'>
                        <input placeholder="username" type="text" name="username" id="id_username" />
                        <input placeholder="senha" type="password" name="senha" id="id_senha" />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className={styles.LogarComOutros}>
                    <span>OU</span>
                    <button><Google size={21} /> Login com Google</button>
                    <button><Facebook size={21} /> Login com Facebook</button>
                    <a className={styles.LinksLogin} href="#">Esqueceu a senha?</a>
                    <a className={styles.LinksLogin} href="#">Primeira vez aqui? <strong>Registre-se agora.</strong></a>
                </div>
            </div>
        </div>
    );
}