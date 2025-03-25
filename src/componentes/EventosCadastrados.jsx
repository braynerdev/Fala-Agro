import styles from './EventosCadastrados.module.css'
import { Evento } from '../componentes/Evento'
export function EventosDoVendedor(){
    return(
        <div id={styles.EventosDoVendedor} className="border rounded shadow p-5">
            <legend>Eventos Cadastrados</legend>
            <div className={styles.inforEventos}>
                <Evento src={'https://img.freepik.com/fotos-gratis/captura-de-uma-vaca-aubrac-com-chifres-na-beira-de-uma-estrada_181624-56507.jpg'} nomeAlt={'BOYadeiro'} nomeEvento={'BOYadeiro'} DataEvento={'26/08/2025'} IngressosTotais={1500} IngressosVendidos={876}/>
                <Evento src={'https://abag.com.br/wp-content/uploads/2025/01/agro-contribui-com-maior-oferta-e-contencao-do-preco-dos-alimentos.png'} nomeAlt={'Verdão'} nomeEvento={'Verdão'} DataEvento={'12/06/2025'} IngressosTotais={100} IngressosVendidos={67} IngressoMinimo={0}/>
                <Evento src={'https://maquinasagro.com/wp-content/uploads/2025/02/BKT1.jpg'} nomeAlt={'Agro Do Futuro'} nomeEvento={'Agro Do Futuro'} DataEvento={'16/07/2025'} IngressosTotais={300} IngressosVendidos={190} IngressoMinimo={10}/>
            </div>
        </div>        
    )
}