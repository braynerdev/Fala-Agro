import { CarouselIndex } from "../componentes/Index/Carousels";
import { CardsCarousel } from "../componentes/Index/CarouselCards";
import classes from "./Index.module.css"
import { CardNoticia } from "../componentes/Index/CardNoticia";
import { noticias } from "../Data/Noticia";



export function PagNavegacao() {
    
    return (
      <>
        <CarouselIndex />
        <div className={classes.container}>
          <div className={classes.ContainerCardTodos}>
              <CardsCarousel title="Todos" />
          </div>
          <div className={classes.ContainerCardTodos}>
              <CardsCarousel title="Perto De Você" />
          </div>
          <div className={classes.ContainerCardNoticias}>
              <CardNoticia title="Noticias" noticias={noticias} />
          </div>
          <div className={classes.ContainerCardTodos}>
              <CardsCarousel title="Gratuito" />
          </div>
          <div className={classes.ContainerCardTodos}>
              <CardsCarousel title="Proximos dias" />
          </div>
        </div>
      </>
    )
  }