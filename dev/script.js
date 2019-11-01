import React, { Component} from 'react';

import ReactDOM from 'react-dom';

import List from './components/List';

class App extends Component {
	constructor() {
		super();
		this.state = {
			listNews: [
				{
					id: 1,
					text: 'news1'
				},
				{
					id: 2,
					text: 'news2'
				},
				{
					id: 3,
					text: 'news3'
				},
				{	
					id: 4,
					text: 'news4'
				},
				{
					id: 5,
					text: 'news5'
				},
				{
					id: 6,
					text: 'news6'
				}
			]
		}
	}
	render() {
		const { listNews } = this.state;
		return (
			<div>				
				<List data={listNews} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);