import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <tr>
          <td>About</td>
          <td></td>
          <td>Contact</td>
        </tr>
        <tr>
          <td></td>
          <td>Portfolio</td>
          <td></td>
        </tr>
      </div>
    );
  };
};

export default Navigation;
