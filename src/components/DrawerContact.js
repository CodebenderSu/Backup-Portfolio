import React, { Component } from 'react';
import * as Flavor from '../flavor.json';
import * as fire from '../assets/fire.gif';
import * as gmail from '../assets/gmail.png';
import * as github from '../assets/github.jpg';
import * as linkedin from '../assets/linkedin.png';

class DrawerContact extends Component {
  render() {
    let open = this.props.status ? 'open-side' : '';
    return (
      <div className={ "right-drawer " + open }>
        <div className="right-drawer-content">
          <h1 className="drawer-header">{Flavor.Contact.Header}</h1>
          <p>{Flavor.Contact.Paragraph1}</p>
          <div className="contact">
            <div>
            <a href="mailto:codebendersu@gmail.com">
              <img src={gmail} alt="Gmail" title="Email me" />
            </a>
            </div>
            <div>
            <a href="https://github.com/CodebenderSu">
              <img src={github} alt="Github" title="My Github profile" />
            </a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/codebendersu/">
              <img src={linkedin} alt="LinkedIn" title="My LinkedIn" />
            </a>
            </div>
            <p className="subtitle">{Flavor.Contact.Paragraph2}</p>
          </div>

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
