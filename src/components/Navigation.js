import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <tr>
          <td><a onClick={this.props.handleAboutClick}>About</a></td>
          <td></td>
          <td><a onClick={this.props.handleContactClick}>Contact</a></td>
        </tr>
        <tr>
          <td></td>
          <td><a onClick={this.props.handlePortfolioClick}>Portfolio</a></td>
          <td></td>
        </tr>
      </div>
    );
  };
};

export default Navigation;
