import React, { Component } from 'react';
import Airbending from './Airbending.js';
import * as avatar from '../utils/images/avatar.jpg';
import * as air from '../utils/images/air.png';

class Avatar extends Component {
  render() {
    let flip = this.props.status ? 'avatar-flip' : '';
    return (
      <div className="avatar-container">
        <div className={"avatar " + flip} onClick={this.props.handleAvatarClick}>
{/* Front Side */}
          <div className="avatar-front">
            <img src={avatar} alt="Avatar"
                 title="Fancy Schmancy Avatar" />
          </div>
{/* Back Side */}
          <div className="avatar-back">
            <img src={air} alt="Air" />
          </div>
        </div>
      </div>
    );
  };
};

export default Avatar;
