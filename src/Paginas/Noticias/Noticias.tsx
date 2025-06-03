import React from 'react';
import { useParams } from 'react-router-dom';
import { noticias } from '../../Dados/News';
import classes from './Noticias.module.css';

const PaginaNoticia: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const noticia = noticias.find(n => n.id === Number(id));

  if (!noticia) {
    return (
      <div className={classes.container}>
        <h2 style={{ color: 'red' }}>Notícia não encontrada.</h2>
      </div>
    );
  }

  const dataFormatada = noticia.data.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={classes.container}>
      {noticia.image && (
        <img
          src={noticia.image}
          alt={noticia.title}
          className={classes.imageBanner}
        />
      )}
      <h2 className={classes.title}>{noticia.title}</h2>
      <p className={classes.date}>{dataFormatada}</p>
      <hr className={classes.divider} />
      <p className={classes.content}>{noticia.conteudo}</p>
      <a href="/" className={classes.backLink}>
        ← Voltar para o inicio
      </a>
    </div>
  );
};

export default PaginaNoticia;
