import React,{Component} from 'react';
import './App.css';

import { FaUser } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import Header from "./components/Header";
import imageWizard from './img/wizard.jpg';
import Navbar from './components/Navbar';

import EditIcon from './components/EditIcon';
import UserIcon from './components/UserIcon';
import JumpTo from './components/JumpTo';

import ChannelsHome from './components/ChannelsHome';
import DMsHome from './components/DMsHome';
import Threads from './components/Threads';

import DirectMessageUser from './components/DirectMessageUser';

import Mention from './components/Mention';

import You from './components/You';

class App extends Component {
	state = {
		
		activeWindow: 'home',
		titles: [
			"The Wizard's SQUAD",
			"Direct messages",
			"Mentions & reactions",
			"You"
		],
		title: "The Wizard's SQUAD",
		inputHomeChannels: [
			{
				id: 1,
				channel: 'thewizardingclan'
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
			},
			{
				id: 11,
				userOn: 'Test'
			},
			{
				id: 12,
				userOn: 'Test 2'
			},
			{
				id: 13,
				userOn: 'Test 3'
			},
			{
				id: 14,
				userOn: 'Test 4'
			}
		],
		userDms: [
			{
				id: 15,
				userName: 'Leona So',
				lastMessage: {
					message: "Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though.",
					date: "January 31 2019"
				}
			},
			{
				id: 16,
				userName: 'Bex Birkett',
				lastMessage: {
					message: "He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.",
					date: "January 31 2019"
				}
			},
			{
				id: 17,
				userName: 'Richard W',
				lastMessage: {
					message: "Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of.",
					date: "January 31 2019"
				}
			},
			{
				id: 18,
				userName: 'Deanaw1993',
				lastMessage: {
					message: "Now improving and one sincerity intention allowance commanded not. Oh an am frankness be necessary earnestly advantage estimable extensive.",
					date: "January 31 2019"
				}
			},
			{
				id: 19,
				userName: 'Lucy D',
				lastMessage: {
					message: "yeah",
					date: "January 31 2019"
				}
			},
			{
				id: 20,
				userName: 'Suleman Rathor',
				lastMessage: {
					message: "Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now. ",
					date: "January 31 2019"
				}
			},
			{
				id: 21,
				userName: 'Silvia Petruta',
				lastMessage: {
					message: "You: Have a look at this later",
					date: "January 31 2019"
				}
			}
		],
		mentions: [
			{
				id: 22,
				reaction: {
					user: 'Leona So',
					message: ' mentioned you in ',
					channel: 'wizards',
					date: 'May 28th',
					userIcon: <UserIcon />,
					reactionIcon: null,
					number: ''
				},
				message: {
					userName: 'Leona So',
					text: '@Bex Birkett @Silvia Petruta are you coming in BBB?'
				}
			},
			{
				id: 23,
				reaction: {
					user: 'Kath Woods',
					message: ' mentioned you in ',
					channel: 'thewizardingclan',
					date: 'May 26th',
					userIcon: <UserIcon />,
					reactionIcon: null,
					number: ''
				},
				message: {
					userName: 'Kath Woods',
					text: 'Morning @channel\nReminder: Yoga is at 11:15 this morning.'
				}
			},
			{
				id: 24,
				reaction: {
					user: 'Robert Marsh',
					message: ' reacted in ',
					channel: 'wizards',
					date: 'May 24th',
					userIcon: null,
					reactionIcon: <AiFillLike fill={'rgb(255, 145, 0)'}/>,
					number: ' 1'
				},
				message: {
					userName: 'Silvia Petruta',
					text: "FIND DESIGN INSPIRATION:\nhttps://dribbble.com\nhttps://land-book.com/"
				}
			},
			{
				id: 25,
				reaction: {
					user: 'Kath Woods',
					message: ' mentioned you in ',
					channel: 'witchcraft',
					date: 'May 22nd',
					userIcon: <UserIcon />,
					reactionIcon: null,
					number: ''
				},
				message: {
					userName: 'Kath Woods',
					text: 'Hey @channel,\n\nReminder- PT session at 12:15\nTopic: PT session with Matt'
				}
			},
			{
				id: 26,
				reaction: {
					user: 'Lucy D',
					message: ' reacted in ',
					channel: 'wizards',
					date: 'May 21st',
					userIcon: null,
					reactionIcon: <FaHeart fill={'red'} />,
					number: ' 1'
				},
				message: {
					userName: 'Silvia Petruta',
					text: 'Can we have a break please?'
				}
			},
			{
				id: 27,
				reaction: {
					user: 'Paddy',
					message: ' mentioned you in ',
					channel: 'wizards',
					date: 'May 15th',
					userIcon: <UserIcon />,
					reactionIcon: null,
					number: ''
				},
				message: {
					userName: 'Paddy',
					text: "Cheers for the demo's @Suleman Rathor @Silvia Petruta got my timeout() working!!!\nHave a good weekend all!"
				}
			}
		],
		user: {
				id: 28,
				name: 'Wizard',
				status: 'Active',
				isAway: false
			}
	} 

	switchMainWindowHandler = (event) => {
		if (event.target.className.includes('home')) {
			this.setState({
				activeWindow: 'home',
				title: this.state.titles[0]
			});	
		} else if (event.target.className.includes('dms')) {
			this.setState({
				activeWindow: 'dms',
				title: this.state.titles[1]
			});
		} else if (event.target.className.includes('mentions')) {
			this.setState({
				activeWindow: 'mentions',
				title: this.state.titles[2]
			});
		} else if (event.target.className.includes('you')) {
			this.setState({
				activeWindow: 'you',
				title: this.state.titles[3]
			});
		}
	}

	toggleStatusHandler = () => {
		let user = {...this.state.user};
		if (user.isAway) {
			user.status = 'Active';
			user.isAway = false;
			this.setState({user});
		} else {
			user.status = 'Away';
			user.isAway = true;
			this.setState({user});
		}
	}
	
	render () {
		const directMessageUsers = this.state.userDms.map(input => {
			return <DirectMessageUser key={input.id} userName={input.userName} lastMessage={input.lastMessage} />
		});

		const mentions = this.state.mentions.map(input => {
			return <Mention key={input.id} reaction={input.reaction} message={input.message}/>
		});

		let mainWindow = null;
		switch (this.state.activeWindow) {
			case 'dms':
				mainWindow = (
					<div className="main">
						<JumpTo />
						{directMessageUsers}
						<EditIcon />	
					</div>
				);
				break;
			case 'mentions': 
				mainWindow = (
					<div className="main">
						{mentions}
						<EditIcon />
					</div>
				);
				break;
			case 'you':
				mainWindow = (
					<div className='main'>
						<You user={this.state.user} toggleStatusHandler={this.toggleStatusHandler} />
					</div>
				);
				break;
			case 'home':
			default:
				mainWindow = (
					<div className="main">
						<JumpTo />
						<Threads />
						<ChannelsHome channels={this.state.inputHomeChannels} />
						<DMsHome users={this.state.inputHomeDms} />
						<EditIcon />
					</div>
				);
				break;

		}

		return (

			<React.Fragment>
        		<Header imageWizard={imageWizard} title={this.state.title} />
				{mainWindow}
				<Navbar clickedBtn={this.switchMainWindowHandler} activeBtn={this.state.activeWindow}/>
      		</React.Fragment>
    )
  }
}

export default App;
