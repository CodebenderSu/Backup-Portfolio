import React, { Component } from 'react';
import Airbending from './Airbending.js';
import * as avatar from '../utils/images/avatar.png';
import * as air from '../utils/images/air.png';
import * as greatestChange from '../utils/audio/greatest-change.mp3';

class Avatar extends Component {
  render() {
    let flip = this.props.status ? 'avatar-flip' : '';
    return (
      <div className="avatar-container">
        <Airbending />
        <div className={"avatar " + flip} onClick={this.props.handleAvatarClick}>
          <div className="avatar-front"> {/* Front Side */}
            <img src={avatar} alt="Avatar"
                 title="Fancy Schmancy Avatar" />
          </div>
          <div className="avatar-back"> {/* Back Side */}
            <img src={air} alt="Air" />
            <audio className="audio-player" controls
                   title="'Greatest Change' by Jeremy Zuckerman">
              <source src={greatestChange} type="audio/mp3" />
              Your browser does not support this feature.
            </audio>
          </div>
        </div>
      </div>
    );
  };
};

export default Avatar;
