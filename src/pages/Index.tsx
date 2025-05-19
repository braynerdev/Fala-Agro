import { CarouselIndex } from "../Components/Index/Carousels";
import { CardsCarousel } from "../Components/Index/CarouselCards";
import classes from "./Index.module.css"
import { CardNoticia } from "../Components/Index/CardNews";
import { noticias } from "../Data/News";







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
          <CardNoticia title="Notícias" noticias={noticias} />
        </div>
        <div className={classes.ContainerCardTodos}>
          <CardsCarousel title="Gratuito" />
        </div>
        <div className={classes.ContainerCardTodos}>
          <CardsCarousel title="Próximos Dias" />
        </div>
      </div>
    </>
  )
}