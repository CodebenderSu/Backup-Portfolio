import React, { Component } from 'react';
import * as avatar from '../utils/images/avatar.png';

class Avatar extends Component {
  render() {
    return (
      <div>
        <img className="avatar" src={avatar} alt="Avatar"
             title="Fancy Schmancy Avatar" />
      </div>
    );
  };
};

export default Avatar;
