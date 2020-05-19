import React from 'react';
import PropTypez from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavBar.scss';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: PropTypez.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
    <div className="MyNavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">SportsBall Roster App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            {
              authed
                ? <button className="nav-link btn btn-danger" onClick={this.logMeOut}>LogOut</button>
                : ''
            }
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
  }
}

export default MyNavBar;
