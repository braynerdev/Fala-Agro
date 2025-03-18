import { FormLogin } from '../componentes/FormLogin';
import styles from '../Pages/Login.module.css';
import LogoFalaAgro from '/public/img/LogoFalaAgro.svg'
import { Facebook, Google } from 'react-bootstrap-icons'


export function Login() {
    return (
        <div className={styles.FormLogin}>
            <div className={styles.content}>
                <img src={LogoFalaAgro} />
                <FormLogin />
                <main>
                    <div className={styles.LogarComOutros}>
                        <span>OU</span>
                        <button><Google size={21} /> Login com Google</button>
                        <button><Facebook size={21} /> Login com Facebook</button>
                        <a className={styles.LinksLogin} href="#">Esqueceu a senha?</a>
                        <a className={styles.LinksLogin} href="#">Primeira vez aqui? <strong>Registre-se agora.</strong></a>
                    </div>
                </main>
            </div>
        </div>
    );
}