import React, { Component } from 'react';

class BuzzList extends Component {
  render() {
	const { title, onClick } = this.props;
    return (
      <div id="generator" className="component">
		<div onClick={onClick} style={{cursor: 'pointer', width: '100%', height: '100%'}}> {this.props.title} </div> 
	  </div>
    );
  }
}

export default BuzzList;

