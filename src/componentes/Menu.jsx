import styles from './Menu.module.css'

export function Menu(){
    return(
        <div className={styles.menu}>
            <div className={styles.ContenteMenu}>
                <span>Area Do Vendedor</span>
                <a href='#'>Perfil De Vendedor</a>
                <a href='#'>Relatorios Dos Eventos</a> 
                <a href='#'>Validar Comentario</a>  
                <a href='#'>Gerenciar Eventos</a>   
                <a href='#'>Finanças</a>    
            </div>
        </div>
    )
}

