import { CardsFinancas } from '../../Components/AreaDoVendedor/CardsFinancas'
import { Grafico } from '../../Components/AreaDoVendedor/Grafico'
import classes from './PagAreaVendedor.module.css'
import { Tabela } from '../../Components/AreaDoVendedor/Tabela'
export function PerfilAreaDoVendedor() {
  return (
    <>
    <div className={classes.container}>
      <CardsFinancas />
      <Grafico />
      <Tabela />
    </div>
    </>
  )
}