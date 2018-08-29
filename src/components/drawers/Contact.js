import React, { Component } from 'react';
import { contact } from '../../data.json';
import fire from '../../assets/fire.gif';
import gmail from '../../assets/gmail.png';
import github from '../../assets/github.jpg';
import linkedin from '../../assets/linkedin.png';

class Contact extends Component {
  render() {
    let open = this.props.status ? 'open-side' : '';
    return (
      <div className={ "right-drawer " + open }>
        <div className="right-drawer-content">
          <h1 className="drawer-header">{contact.header}</h1>
          <p>{contact.paragraph1}</p>
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
            <p className="subtitle">{contact.paragraph2}</p>
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

export default Contact;
