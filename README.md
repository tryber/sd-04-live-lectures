# Game List with React App

 Essa aplicação sera desenvolvida em react para mostrar os jogos mais populares (com mais unidades vendidas) de todos os tempos
 
## Para cada jogo, é preciso mostrar:

O nome do jogo;

A empresa desenvolvedora do jogo;

O número de unidades vendidas.

## Estrutura de desenvolvimento

Cada parte da nossa interface sera quebrada em pequenos componentes.

## Component Model

    |--/App [Done de vdd]
    |   | |--\VideoGameList [Done de vdd]
    |   |             |--\VideoGame [Done de vdd]
    |   |
    |   |--\Footer

O App **Componente Mãe/Pai** de todos.

O **Componente Mãe** VideoGameList composto por vários componentes VideoGame que são logo consideradas **componentes filhas**.

Visto em formato de código exemplo:

```javascript
    const videoGame = { 
        title: "Minecraft",
        developer: "Mojang",
        sales: 180000000
    }

    const videoGameList = [videoGame, videoGame, videoGame]
```

O **Componente Footer** Componente filho de **App**