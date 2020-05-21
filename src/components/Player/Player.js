import React from 'react';
// import PropTypez from 'prop-types';
import './Player.scss';
import playerShape from '../../helpers/propz/playerShape';
import playerData from '../../helpers/data/playerData';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    // makePlayers: PropTypez.func.isRequired,
  }

  deletePlayer = (e) => {
    e.preventDefault();
    const { loadComponent } = this.props;
    const playerId = e.target.closest('button').id;
    playerData.deletePlayer(playerId);
    loadComponent();
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
        <button id={player.id} onClick={this.deletePlayer}><i className="fas fa-user-slash"></i></button>
      </div>
      </div>
    );
  }
}

export default Player;
