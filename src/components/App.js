import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Navigation from './Navigation.js';
import DrawerAbout from './DrawerAbout.js';
import DrawerContact from './DrawerContact.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Avatar />
        <Navigation />

        <DrawerAbout />
        <DrawerContact />
      </div>
    );
  };
};

export default App;
