import classes from './Cadastre.module.css'
import { FormCadastre } from '../../Components/Cadastre/FormUser'
import { FormEndereco } from '../../Components/Cadastre/FormEndereco'

export function Cadastre() {
    return (
        <div className={classes.container}>
            <div className={classes.cardContainer}>
                <main>
                    <form>
                        <div>
                            <FormCadastre titulo="Usuário"/>
                        </div>
                        <div>
                            <FormEndereco titulo="Endereço"/>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}