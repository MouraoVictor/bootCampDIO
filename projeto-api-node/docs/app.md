# Podcast Manager

### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio
Pordcasts feito em vídeo

### Features
- Listar os podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- FIltrar episódios por nome de podcast

## Como
#### Feature:
    Listar os podcasts em sessões de categorias

### Como vou implementar:
    GET: retornar em uma api rest (json) o nome do podcast, nome do episodio, a imagem de capa, link do ep. e categoria.

    Response:
```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde","bodybuilder","esporte"]
    },

    {
        podcastName: "flow",
        episode: "Rubens Barrichello - Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["corrida","esporte"]
    }

]
```