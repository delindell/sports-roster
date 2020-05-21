import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavBar';
import TeamContainer from '../components/TeamContainer/TeamContainer';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }


  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      console.log('deleting is recalling this function');
      let componentToLoad = '';
      if (authed) {
        componentToLoad = <TeamContainer loadComponent={loadComponent}/>;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <MyNavBar authed={authed} />
        {loadComponent()}
        <footer>CCCP Legends Roster &copy;2020</footer>
      </div>
    );
  }
}

export default App;
