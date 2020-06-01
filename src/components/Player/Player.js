import React from 'react';
import './Player.scss';
import PropTypez from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    editAPlayer: PropTypez.func.isRequired,
    deletePlayer: PropTypez.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deletePlayer, player } = this.props;
    deletePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, editAPlayer } = this.props;
    editAPlayer(player);
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
        <button id={player.id} onClick={this.editPlayerEvent} className="btn">Reform this Communist</button>
        <button id={player.id} onClick={this.deletePlayerEvent} className="btn"><i className="fas fa-user-slash"></i></button>
      </div>
      </div>
    );
  }
}

export default Player;
