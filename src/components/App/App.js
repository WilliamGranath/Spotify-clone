import './App.css';
import { Box } from '@mui/system';
import SideNav from '../SideNav/SideNav';
import Library from '../Library/Library';
import Playlist from '../Playlist/Playlist';
import Login from '../Login/Login';
import MobileNav from '../MobileNav/MobileNav';
import Player from '../Player/Player';

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
			<Box sx={{ paddingBottom: { xs: '146px', md: '90px' } }}>
				{/* <Login /> */}
				<SideNav playlists={mockData} />
				<Library playlists={mockData} />
				<Playlist name={'Rock from the 90s'} image="/Justin-Bieber.png" songs={songs} />
			</Box>
			<Player image={'/Justin-Bieber.png'} title={'Peaches'} artist={'Justin Bieber'} />
			<MobileNav />
		</div>
	);
}

export default App;

