import React, { Component } from 'react';

class PortfolioItem extends Component {
  render() {
    return (
      <a className="port-item" href={this.props.src}>
        <span>{this.props.desc}</span>
        <img src={this.props.img} alt={this.props.alt} />
      </a>
    );
  }
}

export default PortfolioItem;
