import React, { Component } from 'react';
import * as Flavor from '../flavor.json';
import * as fire from '../utils/images/fire.png';

class DrawerContact extends Component {
  render() {
    let open = this.props.status ? 'open-side' : '';
    return (
      <div className={ "right-drawer " + open }>
        <div className="right-drawer-content">
          <h1 className="drawer-header">{Flavor.Contact.Header}</h1>
          <p>{Flavor.Contact.Paragraph1}</p>
          <p>{Flavor.Contact.Paragraph2}</p>
        </div>
        <img className="drawer-footer" src={fire} alt="fire" />
        <div className="right-drawer-tab" onClick={this.props.handleContactClick}>
          <i className="fas fa-angle-double-right" />
        </div>
      </div>
    )
  }
}

export default DrawerContact;
