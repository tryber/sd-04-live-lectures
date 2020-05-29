import React from 'react';
import VideoGame from './VideoGame'

class VideoGameList extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className="video-game-list">
        {games.map(x => <VideoGame key={x.hashId} game={x} />)}
      </div>
    )
  }
}

export default VideoGameList;

// Key warning porque ?

// O motivo disso é que em React, é recomendável que 
// componentes gerados dinamicamente tenham um identificador, 
// uma key única, com o objetivo de melhorar a performance da aplicação. 

// Como a nossa aplicação é estática e não possuímos nos dados um 
// identificador único para cada jogo, usaremos como identificador 
// o índice do componente VideoGame pertencente a essa lista