import * as React from 'react';
import './App.css';
import SideNav from '../SideNav/SideNav';
import Library from '../Library/Library';
import Playlist from '../Playlist.js/Playlist';

function App() {
	const mockData = [
		{ name: 'Rock', playlistId: 123, image: './Pics/Spongebobby.jfif' },
		{ name: 'Pop', playlistId: 646, image: './/Pics/Pop.jfif' },
		{ name: 'Hip hop', playlistId: 834, image: './Pics/Hip-Hop.jpg' },
		{ name: 'Old but Gold', playlistId: 5503, image: './Pics/Playlist-pic.jpg' },
		{ name: 'Country', playlistId: 4832, image: './Pics/Country.jpg' }
	];

	const songs = [
		{
			image: './Pics/Country.jpg',
			title: 'Holy',
			artist: 'Justin Bieber',
			album: 'No clue',
			addDate: '2022-01-05',
			duration: 180
		},
		{
			image: './Pics/Country.jpg',
			title: 'Holy',
			artist: 'Justin Bieber',
			album: 'No clue',
			addDate: '2022-01-05',
			duration: 180
		},
		{
			image: './Pics/Country.jpg',
			title: 'Holy',
			artist: 'Justin Bieber',
			album: 'No clue',
			addDate: '2022-01-05',
			duration: 180
		},
		{
			image: './Pics/Country.jpg',
			title: 'Holy',
			artist: 'Justin Bieber',
			album: 'No clue',
			addDate: '2022-01-05',
			duration: 180
		},
		{
			image: './Pics/Country.jpg',
			title: 'Holy',
			artist: 'Justin Bieber',
			album: 'No clue',
			addDate: '2022-01-05',
			duration: 180
		},
		{
			image: './Pics/Country.jpg',
			title: 'Holy',
			artist: 'Justin Bieber',
			album: 'No clue',
			addDate: '2022-01-05',
			duration: 180
		}
	];
	return (
		<div className="App">
			<SideNav playlists={mockData} />
			<Library playlists={mockData} />
			<Playlist name={'Rock from the 90s'} image="./Pics/Album-cover2.png" songs={songs} />
		</div>
	);
}

export default App;
