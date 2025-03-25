import { HeaderBase } from '../componentes/Header'
import styles from '../Pages/AreaDoVendedor.module.css'
import { EventosDoVendedor } from '../componentes/EventosCadastrados'
import { Menu } from '../componentes/Menu'
export function AreaDoVendedor(){
    return(
        <div className={styles.AreaDoVendedor}>
            <div className={styles.content}>
                <Menu />
                <main>
                    <div>
                        <HeaderBase />
                    </div>
                    <div className={styles.conteudo}>
                        <EventosDoVendedor />
                        <div className={styles.DadosDoVendedor}>
                            <div className="border rounded shadow p-5">
                                <legend>Dados do vendedor</legend>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}