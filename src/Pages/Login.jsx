import styles from '../Pages/Login.module.css';
import LogoFalaAgro from '../img/LogoFalaAgro.svg'
import { Facebook, Google } from 'react-bootstrap-icons'

export function Login() {
    return (
        <div className={styles.FormLogin}>
            <div className={styles.DivImg}>

            </div>
            <div className={styles.DivForm}>
                <img className={styles.Img} src={LogoFalaAgro}/>
                <div className={styles.DivCamposForm}>
                    <form method="post" autoComplete='off'>
                        <div class="row mb-2">
                            <div class="md-12 form-floating">
                                <input type="text" placeholder='Username' name="username" className='form-control'  id="id_username" />
                                    <label id={styles.labelUsuario} for="id_username">bione</label>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-12 form-floating">
                                <input type="password" placeholder="Senha" className='form-control' name="senha" id="id_senha" />
                                    <label id={styles.labelSenha} htmlFor="id_senha">Senha</label>
                            </div>
                        </div>
                        <div className={styles.footerForm}>
                            <label for="id_lembrarDeMin" className={styles.lembraDeMin}>
                                <input type="checkbox" className='form-check-input' name="lebrarDeMin" id="id_lembrarDeMin" />
                                Lembrar de min? 
                            </label>
                            <a href="#">Esqueceu senha?</a>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className={styles.LogarComOutros}>
                        <span>OU</span>
                        <a><Google size={21} /> Login com Google</a>
                        <a><Facebook size={21} /> Login com Facebook</a>
                    </div>
                </div>
                <a className={styles.Registrar} href="#"><span>Primeira vez aqui?</span> <strong>Registre-se agora.</strong></a>
            </div>
        </div>
    );
}