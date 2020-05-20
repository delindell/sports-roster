import React from 'react';

import './TeamContainer.scss';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';

class TeamContainer extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get players', err));
  }

  render() {
    const { players } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} />);
    return (
      <div className="TeamContainer">
        <h1>CCCP Legends Team</h1>
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamContainer;
