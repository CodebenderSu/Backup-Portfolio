import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Navigation from './Navigation.js';
import DrawerAbout from './DrawerAbout.js';
import DrawerContact from './DrawerContact.js';
import DrawerPortfolio from './DrawerPortfolio.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftDrawer: false,
      rightDrawer: false,
      bottomDrawer: false
    };
  }
  handleAboutClick = () => {
    const toggleStatus = this.state.leftDrawer
    this.setState({leftDrawer: !toggleStatus})
  }
  handleContactClick = () => {
    const toggleStatus = this.state.rightDrawer
    this.setState({rightDrawer: !toggleStatus})
  }
  handlePortfolioClick = () => {
    const toggleStatus = this.state.bottomDrawer
    this.setState({bottomDrawer: !toggleStatus})
  }
  render() {
    return (
      <div className="app">
        <Avatar />
        <Navigation handleAboutClick={this.handleAboutClick}
                    handleContactClick={this.handleContactClick}
                    handlePortfolioClick={this.handlePortfolioClick} />

        <DrawerAbout status={this.state.leftDrawer}
                     handleAboutClick={this.handleAboutClick} />
        <DrawerContact status={this.state.rightDrawer}
                       handleContactClick={this.handleContactClick} />
        <DrawerPortfolio status={this.state.bottomDrawer}
                         handlePortfolioClick={this.handlePortfolioClick} />
      </div>
    );
  };
};

export default App;
