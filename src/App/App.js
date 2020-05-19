import React from 'react';

import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavBar';
import TeamContainer from '../components/TeamContainer/TeamContainer';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <MyNavBar />
        <TeamContainer />
      </div>
    );
  }
}

export default App;
