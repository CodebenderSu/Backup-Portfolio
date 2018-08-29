import React, { Component } from 'react';
import Avatar from './Avatar.js';
import Navigation from './Navigation.js';
import About from './drawers/About.js';
import Contact from './drawers/Contact.js';
import Portfolio from './drawers/Portfolio.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: false,
      leftDrawer: false,
      rightDrawer: false,
      bottomDrawer: false
    };
  }
  handleAvatarClick = () => {
    const toggleStatus = this.state.avatar;
    this.setState({avatar: !toggleStatus});
  }
  handleAboutClick = () => {
    const toggleStatus = this.state.leftDrawer;
    this.setState({leftDrawer: !toggleStatus});
  }
  handleContactClick = () => {
    const toggleStatus = this.state.rightDrawer;
    this.setState({rightDrawer: !toggleStatus});
  }
  handlePortfolioClick = () => {
    const toggleStatus = this.state.bottomDrawer;
    this.setState({bottomDrawer: !toggleStatus});
  }
  render() {
    return (
      <div className="app">
        <Avatar status={this.state.avatar}
                handleAvatarClick={this.handleAvatarClick} />
        <Navigation handleAboutClick={this.handleAboutClick}
                    handleContactClick={this.handleContactClick}
                    handlePortfolioClick={this.handlePortfolioClick} />

        <About status={this.state.leftDrawer}
                     handleAboutClick={this.handleAboutClick} />
        <Contact status={this.state.rightDrawer}
                       handleContactClick={this.handleContactClick} />
        <Portfolio status={this.state.bottomDrawer}
                         handlePortfolioClick={this.handlePortfolioClick} />
      </div>
    );
  };
};

export default App;
