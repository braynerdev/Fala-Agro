import styles from "./NotFound.module.css"


export function NotFound(){
    return(
        <div className={styles.NotFoundContent}>
            <h1>Page não existe!</h1>
            <table className="table table-danger">
                <thead>
                    <tr>
                        <th scope="row">Nome</th>
                        <th scope="row">Rotas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>INDEX</td>
                        <td>" "</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>LOGIN</td>
                        <td>/login</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>PAG NOT FOUND</td>
                        <td>Se não achar nenhuma rota </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}