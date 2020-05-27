import React from 'react';
import PropTypes from 'prop-types';
import './NewPlayerForm.scss';
import authData from '../../helpers/data/authData';

class NewPlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImage: '',
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerPosition, playerImage } = this.state;
    const newPlayer = {
      imageUrl: playerImage,
      name: playerPosition,
      position: playerName,
      uid: authData.getUid(),
    };
    this.props.saveNewPlayer(newPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImage: e.target.value });
  }

  render() {
    const { playerName, playerPosition, playerImage } = this.state;
    return (
      <div className="NewPlayerForm">
      <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="player-name">Name</label>
            <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter Legendary Strong Man Here"
            value={playerName}
            onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-position">Position</label>
            <input
            type="text"
            className="form-control"
            id="player-description"
            placeholder="What Attrocites did this Dude Commit?"
            value={playerPosition}
            onChange={this.positionChange} />
          </div>
          <div className="form-group">
            <label htmlFor="player-image">Image</label>
            <input
            type="text"
            className="form-control"
            id="player-image"
            placeholder="Find an Incredible Photo to post here"
            value={playerImage}
            onChange={this.imageChange} />
          </div>
          <button className="btn btn-success" onClick={this.savePlayer}>Save Dis Board</button>
        </form>
    </div>
    );
  }
}

export default NewPlayerForm;
