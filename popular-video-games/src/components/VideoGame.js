import React from 'react';

class VideoGame extends React.Component {
  render() { // Obrigatoriamente devemos usar o render!
    const { title, developer, sales } = this.props.game;

    return (
      <p>
        <strong>{title}</strong>,
        made by <em>{developer}</em>,
        sold {sales.toLocaleString('pt-BR')}
      </p>
    )
  }
}

export default VideoGame;