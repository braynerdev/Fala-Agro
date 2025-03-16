import { FormLogin } from './componentes/FormLogin';
import styles from './Login.module.css';
import LogoFalaAgro from './img/LogoFalaAgro.svg'
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
                        <a href="#" className={styles.buttonsLoginAlt}><Google /> Login com Google</a>
                        <a href="#" className={styles.buttonsLoginAlt}><Facebook /> Login com Facebook</a>
                        <a href="#">Esqueceu a senha?</a>
                        <a href="#">Primeira vez aqui? <strong>Registre-se agora.</strong></a>
                    </div>
                </main>
            </div>
        </div>
    );
}