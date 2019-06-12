import React, { Component } from 'react';
import './Subheader.css'
class Subheader extends Component {

	render() {
		return (
			<div className="subheader-container p-2 d-flex">
				<div className="p-2">MENU BARS</div>
				<div className="p-2">ARE AWESOME</div>
				<div className="p-2">AND SOMETIMES</div>
				<div className="p-2">NEED TO BE HUGE</div>
			</div>
		)
	}
}

export default Subheader;