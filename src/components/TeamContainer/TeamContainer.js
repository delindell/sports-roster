import React from 'react';

import './TeamContainer.scss';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';
import NewPlayerForm from '../NewPlayerForm/NewPlayerForm';

class TeamContainer extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }

  getInfo = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get players', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getInfo())
      .catch((err) => console.error('failed to delete player', err));
  }

  saveNewPlayer = (newPlayer) => {
    playerData.saveNewPlayer(newPlayer)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('could not save new player', err));
  }

  render() {
    const { players, formOpen } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer}/>);
    return (
      <div className="TeamContainer">
        <h1>CCCP Legends Team</h1>
        <button className="btn btn-outline-warning mb-3" onClick={() => this.setState({ formOpen: true })}>Add Another Legend to this Team</button>
        { formOpen ? <NewPlayerForm saveNewPlayer={this.saveNewPlayer} /> : '' }
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamContainer;
