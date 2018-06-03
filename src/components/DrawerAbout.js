import React, { Component } from 'react';
import * as Flavor from '../flavor.json';
import * as water from '../utils/images/water.png';

class DrawerAbout extends Component {
  render() {

    return (
      <div className="left-drawer">
        <div className="left-drawer-content">
          <h1 className="drawer-header">{Flavor.About.Header}</h1>
          <p>{Flavor.About.Paragraph1}</p>
          <p>{Flavor.About.Paragraph2}</p>
          <p>{Flavor.About.Paragraph3}</p>
        </div>
        <img className="drawer-footer" src={water} alt="water" />
      </div>
    )
  }
}

export default DrawerAbout;
