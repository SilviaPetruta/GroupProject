import React,{Component} from 'react';
import './App.css';

import Header from "./components/Header";
import ChannelsHome from './components/ChannelsHome';
import DMsHome from './components/DMsHome';

import imageWizard from './img/wizard.jpg';

class App extends Component {
	state ={
		inputHomeChannels: [
			{
				id: 1,
				channel: 'the wizarding clan'
			},
			{
				id: 2,
				channel: 'wizards'
			},
			{
				id: 3,
				channel: 'witchcraft'
			}
		],
		inputHomeDms:[
			{
				id: 4,
				userOn: 'Andy M'
			},
			{
				id: 5,
				userOn: 'Bex Birkett'
			},
			{
				id: 6,
				userOn: 'Deanaw1993'
			},
			{
				id: 7,
				userOn: 'Leona So'
			},
			{
				id: 8,
				userOn: 'Lucy D'
			},
			{
				id: 9,
				userOn: 'Richard W'
			},
			{
				id: 10,
				userOn: 'Suleman Rathor'
			}
		]
	} 
	
	render () {

		const dmsHome = this.state.inputHomeDms.map(input => {
			return <DMsHome
				key={input.id}
				userOnline={input.userOn}
			/>
		});

		return (
			<React.Fragment>
        		<Header imageWizard = {imageWizard} />
				<ChannelsHome channels={this.state.inputHomeChannels} />
				<DMsHome users={this.state.inputHomeDms} />
      		</React.Fragment>
    )
  }
}

export default App;
