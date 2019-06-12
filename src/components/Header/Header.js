import React, { Component } from 'react';
import './Header.css'
import Subheader from './Subheader/Subheader';
class Header extends Component {

	render() {
		return (
			<div className="header-container d-flex">
				<div className="logo-container mr-auto p-2">
					Mid logo placeholder
				</div>
				<Subheader />
			</div>
		)
	}
}

export default Header;