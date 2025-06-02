// src/Data/news.tsx
import noticia1 from "../assets/img/e509b54f4848a165c377f3ca4b199eca.jpg";
import noticia2 from "../assets/img/55f4f499fbeaf177c255ce471eb7d93a.jpg";
import noticia3 from "../assets/img/b615c0c3a08164e2dea21356442b44b6.jpg";
import noticia4 from "../assets/img/7d056ff10de02ce4c5565e79feabd4f9.jpg";
import noticia5 from "../assets/img/752904c5129072267cdcadffbfff5e93.jpg";

export interface Noticia {
  id: number;
  title: string;
  category: string;
  image: string;
  ativo: boolean;
  principal: boolean;
  data: Date;
  conteudo: string;
  autor?: string;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    title: "Notícia 1",
    category: "Categoria 1",
    image: noticia1,
    ativo: true,
    principal: false,
    data: new Date("2025-06-01"),
    conteudo:
      "Conteúdo detalhado da Notícia 1. Aqui vão os parágrafos e informações completas da notícia para serem exibidas na página individual.",
    autor: "Equipe Editorial",
  },
  {
    id: 2,
    title: "Notícia 2",
    category: "Categoria 2",
    image: noticia2,
    ativo: true,
    principal: false,
    data: new Date("2025-05-28"),
    conteudo:
      "Conteúdo detalhado da Notícia 2. Esta seção pode conter múltiplos parágrafos e informações complementares.",
    autor: "João da Redação",
  },
  {
    id: 3,
    title: "Notícia 3",
    category: "Categoria 3",
    image: noticia3,
    ativo: true,
    principal: false,
    data: new Date("2025-05-25"),
    conteudo:
      "Conteúdo detalhado da Notícia 3. Use essa área para colocar o texto completo da notícia.",
    autor: "Ana Repórter",
  },
  {
    id: 4,
    title: "Notícia 4",
    category: "Categoria 4",
    image: noticia4,
    ativo: true,
    principal: false,
    data: new Date("2025-05-22"),
    conteudo:
      "Conteúdo detalhado da Notícia 4. Texto completo com mais informações e contexto.",
    autor: "Redação Local",
  },
  {
    id: 5,
    title: "Notícia 5",
    category: "Categoria 5",
    image: noticia5,
    ativo: true,
    principal: true,
    data: new Date("2025-05-18"),
    conteudo:
      "Conteúdo detalhado da Notícia 5. Notícia principal com destaque e informações especiais.",
    autor: "Editor-Chefe",
  },
];
