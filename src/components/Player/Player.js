import React from 'react';
import './Player.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deletePlayer, player } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-3">
        <div className="card">
        <img className="card-img-top" src={player.imageUrl} alt="player" />
        <div className="card-body">
          <h4 className="card-title">{player.name}</h4>
          <h5>{player.position}</h5>
        </div>
        <button id={player.id} onClick={this.deletePlayerEvent}><i className="fas fa-user-slash"></i></button>
      </div>
      </div>
    );
  }
}

export default Player;
