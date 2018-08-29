import React, { Component } from 'react';
import { about } from '../../data.json';
import water from '../../assets/water.gif';

class About extends Component {
  render() {
    let open = this.props.status ? 'open-side' : '';
    return (
      <div className={ "left-drawer " + open }>
        <div className="left-drawer-content">
          <h1 className="drawer-header">{about.header}</h1>
          <p>{about.paragraph1}</p>
          <p>{about.paragraph2}</p>
          <p>{about.paragraph3}</p>
        </div>
        <img className="drawer-footer" src={water} alt="water" />
        <div className="left-drawer-tab" onClick={this.props.handleAboutClick}>
          <i className="fas fa-angle-double-left" />
        </div>
      </div>
    )
  }
}

export default About;
