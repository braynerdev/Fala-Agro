import imgLogo from '../img/LogoFalaAgro.svg'
import styles from './Header.module.css'

export function HeaderBase() {
    return (
        <div className={styles.content}>
            <a href="#"><img src={imgLogo} alt="lOGO" /></a>
            <a href='#'>Página incial</a>
            <a href='#'>Perfil</a>
            <a href='#'>Eventos</a>
            <a href='#'>carteira</a>
        </div>
    )
}