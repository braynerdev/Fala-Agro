import styles from './Evento.module.css'

export function Evento({ src, nomeAlt, nomeEvento, DataEvento, IngressosTotais, IngressosVendidos, IngressoMinimo}) {
    return (
        <div className={styles.Evento}>
            <img className={styles.img} src={src} alt={nomeAlt} />
            <span> <legend>Nome Evento</legend> {nomeEvento}</span>
            <span><legend>Data</legend> {DataEvento}</span>
            <span>
                <legend>Ingressos Vendidos</legend>
                <div id={styles.progress} className="progress" role="progressbar" aria-label="Success striped example" aria-valuenow={IngressosVendidos} aria-valuemin={IngressoMinimo ? IngressoMinimo : 0} aria-valuemax={IngressosTotais}>
                    <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" style={{width: `${(IngressosVendidos / IngressosTotais) * 100}%`}}>{((IngressosVendidos * 100)/IngressosTotais).toFixed(0)}%</div>
                </div>
            </span>
        </div>
    );
}