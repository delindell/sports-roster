import React from 'react';

import './TeamContainer.scss';
// import PropTypez from 'prop-types';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';
import Player from '../Player/Player';
import NewPlayerForm from '../NewPlayerForm/NewPlayerForm';

class TeamContainer extends React.Component {
  // static propTypes = {
  //   loadComponent: PropTypez.func.isRequired,
  // }

  state = {
    players: [],
    formOpen: false,
    editPlayer: {},
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

  putPlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false, editPlayer: {} });
      })
      .catch((err) => console.error('unable to update player', err));
  }

  editAPlayer = (player) => {
    this.setState({ formOpen: true, editPlayer: player });
  }

  render() {
    const { players, formOpen, editPlayer } = this.state;
    const makePlayers = players.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer} editAPlayer={this.editAPlayer}/>);
    return (
      <div className="TeamContainer">
        <h1>CCCP Legends Team</h1>
        <button className="btn btn-outline-warning mb-3" onClick={() => this.setState({ formOpen: true })}>Add Another Legend to this Team</button>
        { formOpen ? <NewPlayerForm saveNewPlayer={this.saveNewPlayer} player={editPlayer} putPlayer={this.putPlayer} /> : '' }
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamContainer;
