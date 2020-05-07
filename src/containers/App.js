import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';
import SearchBox from '../components/SearchBox';

class App extends Component {

	constructor(){
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>this.setState({robots:users}))
	}

	onSearchChange = (event) =>{
		this.setState({searchField:event.target.value})
	}

	render(){
		const {searchField, robots} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		)
	}
}

export default App;