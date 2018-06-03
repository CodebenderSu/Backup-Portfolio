import React, { Component } from 'react';
import * as Flavor from '../flavor.json';
import * as fire from '../utils/images/fire.png';

class DrawerContact extends Component {
  render() {
    return (
      <div className="right-drawer">
        <div className="right-drawer-content">
          <h1 className="drawer-header">{Flavor.Contact.Header}</h1>
          <p>{Flavor.Contact.Paragraph1}</p>
          <p>{Flavor.Contact.Paragraph2}</p>
        </div>
        <img className="drawer-footer" src={fire} alt="fire" />
      </div>
    )
  }
}

export default DrawerContact;
