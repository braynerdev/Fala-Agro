# Fala-Agro - Plataforma de Eventos Agropecuários

## Visão Geral

O Fala-Agro é uma plataforma digital especializada em eventos do setor agropecuário, permitindo que usuários encontrem, explorem e comprem ingressos para eventos relacionados à agricultura, pecuária e cultura rural. A plataforma serve como um hub centralizado para conectar organizadores de eventos com participantes interessados.

## Fluxo do Usuário

### 1. Página Inicial

Quando o usuário acessa a plataforma, ele é recebido com:

- **Carrossel Principal**: Exibe banners promocionais dos eventos em destaque.
- **Seções de Eventos Categorizados**:
  - **Todos**: Lista completa de eventos disponíveis.
  - **Perto de Você**: Eventos próximos à localização do usuário.
  - **Gratuito**: Eventos sem custo de entrada.
  - **Próximos Dias**: Eventos que ocorrerão em breve.
- **Seção de Notícias**: Informações e atualizações relevantes sobre o setor agropecuário.

### 2. Exploração de Eventos

O usuário pode:

- **Navegar pelas Categorias**: Explorar eventos através das diferentes seções.
- **Ver Detalhes Rápidos**: Cada card de evento mostra:
  - Nome do evento
  - Data e hora
  - Localização
  - Imagem ilustrativa
  - Botão para acessar detalhes completos
  - Opção para favoritar o evento

### 3. Página de Detalhes do Evento

Ao clicar em um evento, o usuário acessa uma página detalhada contendo:

- **Banner e Cartaz**: Imagens de destaque do evento.
- **Informações Completas**:
  - Nome do evento
  - Data e hora formatadas
  - Localização
  - Descrição detalhada
  - Estrutura disponível
  - Setores contemplados
  - Endereço completo com link para mapa
- **Seção de Comentários**: Feedback de outros usuários.
- **Botão de Compra**: Acesso rápido para aquisição de ingressos.

### 4. Página de Notícias

Ao clicar em uma notícia na seção de Notícias da página inicial, o usuário acessa uma página detalhada contendo:

- **Imagem de Destaque**: Banner ilustrativo da notícia.
- **Título da Notícia**: Em destaque no topo da página.
- **Data de Publicação**: Formatada por extenso (dia da semana, dia, mês e ano).
- **Conteúdo Completo**: Texto integral da notícia.
- **Informação do Autor**: Identificação de quem escreveu a notícia.
- **Link de Retorno**: Opção para voltar à página inicial.

### 5. Processo de Compra

O fluxo de compra segue estas etapas:

1. **Seleção de Ingressos**:
   - Modal com diferentes tipos de ingressos (VIP, Normal)
   - Seleção de quantidade
   - Visualização do valor total

2. **Checkout**:
   - **Dados de Recebimento**:
     - Nome completo
     - E-mail (para recebimento dos ingressos)
   
   - **Informações do Ingresso**:
     - Confirmação dos ingressos selecionados
     - CPF do comprador
     - Aceitação dos termos e condições
   
   - **Forma de Pagamento**:
     - Dados do cartão
     - Opções de parcelamento
   
   - **Resumo do Pedido**:
     - Detalhes do evento
     - Ingressos selecionados
     - Taxas
     - Valor total

3. **Confirmação e Recebimento**:
   - Envio dos ingressos por e-mail após confirmação do pagamento (sujestão futura)

### 6. Área do Vendedor

Para organizadores de eventos, existe uma área específica onde podem:

- Acompanhar vendas e estatísticas
- Gerenciar seu perfil (sujestão futura)
- Criar e editar eventos (sujestão futura)

### 7. Autenticação

O sistema inclui:

- **Login**: Acesso à conta existente
- **Cadastro**: Criação de nova conta de usuário

## Diagrama de Fluxo do Usuário

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌──────────────────┐
│                 │     │                 │     │                 │     │                  │
│   Página        │────▶│   Detalhes do   │────▶│   Seleção de    │────▶│Logar ou cadastrar│
│   Inicial       │     │   Evento        │     │   Ingressos     │     │                  │
│                 │     │                 │     │                 │     │                  │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └──────────────────┘
                                                                                  │
                                                                                  │
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐               │
│                 │     │                 │     │                 │               │
│   Confirmação   │◀────│   Pagamento     │◀────│   Checkout:     │◀──────────────│
│   e E-mail      │     │                 │     │   Dados Pessoais│               
│                 │     │                 │     │                 │               
└─────────────────┘     └─────────────────┘     └─────────────────┘               
```

## Diagrama de Funcionalidades

```
┌───────────────────────────────────────────────────────────┐
│                      FALA-AGRO                            │
└─────────────────────────┬─────────────────────────────────┘
                          │
          ┌───────────────┴───────────────┐
          ▼                               ▼
┌─────────────────┐             ┌─────────────────┐
│  Área do Usuário│             │ Área do Vendedor│
└───────┬─────────┘             └────────┬────────┘
        │                                │
        ▼                                ▼
┌───────────────----------      ┌───────────────────────────────┐
│ - Explorar             |      │ - Gerenciar                   │
│ - Favoritar            |      │   Perfil (futuro)             │
│ - Comprar              |      │ - Criar Eventos(futuro)       │
│ - Comentar (futuro)    |      │ - Ver Estatísticas(futuro)    │
└───────────────----------      └───────────────────────────────┘
```

## Telas Principais

1. **Página Inicial**: Carrossel principal e cards de eventos categorizados
2. **Detalhes do Evento**: Informações completas, estrutura e opção de compra
3. **Página de Notícias**: Artigos e informações relevantes sobre o setor agropecuário
4. **Checkout**: Processo de pagamento em etapas
5. **Login/Cadastro**: Autenticação de usuários
6. **Área do Vendedor**: Gerenciamento de eventos e perfil

## Tecnologias Utilizadas

- **Frontend**: React com TypeScript
- **Estilização**: CSS Modules e Mantine UI
- **Roteamento**: React Router
- **Construção**: Vite

## Status do Projeto

O Fala-Agro está em desenvolvimento ativo, com foco em criar uma experiência completa para usuários interessados em eventos do setor agropecuário.

## Equipe
- **GESTOR**: Daniela Lopes
- **DESENVOLVEDORES**: João Brayner, Bione, Thiago Mariano, Claúdio Eduardo
- **DESIGNS**: Tacyto Cavalcanti, Vannessa, Juliana Pelozo, Isabella Nascimento. 
