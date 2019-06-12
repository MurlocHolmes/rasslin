import React, { Component } from 'react';
import './Home.css'
import Roster from './Roster/Roster';
import Calendar from './Calendar/Calendar';
import Communication from './Communication/Communication';
class Home extends Component {

	render() {
		return (
			<div className="home-container">
				Home
				<Roster />
				<Calendar />
				<Communication />
			</div>
		)
	}
}

export default Home;