import Box from '@mui/material/Box';
import List from '@mui/material/List';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { Typography } from '@mui/material';

const mockPlaylist = [
	{ name: 'Rock', playlistId: 123, image: './Pics/Spongebobby.jfif' },
	{ name: 'Pop', playlistId: 646, image: './/Pics/Pop.jfif' },
	{ name: 'Hip hop', playlistId: 834, image: './Pics/Hip-Hop.jpg' },
	{ name: 'Old but Gold', playlistId: 5503, image: './Pics/Playlist-pic.jpg' },
	{ name: 'Country', playlistId: 4832, image: './Pics/Country.jpg' }
];

function Library({ playlists = mockPlaylist }) {
	const renderPlaylistItems = () => {
		if (!playlists) return 'Loading';
		return playlists.map((playlist, i) => <PlaylistItem {...playlist} key={i} />);
	};

	return (
		<Box
			className="Library"
			sx={{ display: { xs: 'block', md: 'none' }, background: 'black', minHeight: '100vh', padding: '30px 16px' }}
		>
			<Typography variant="h1" sx={{ color: 'text.primary' }}>
				Ditt bibliotek
			</Typography>
			<List>{renderPlaylistItems()}</List>
		</Box>
	);
}

export default Library;
