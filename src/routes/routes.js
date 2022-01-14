import Library from '../components/Library/Library';
import Playlist from '../components/Playlist/Playlist';
import { Box } from '@mui/system';

const NoMatch = () => {
	return <div>404</div>;
};

const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#1a1a1a',
				height: '100vh'
			}}
		>
			<Box sx={{ fontSize: 30 }}>This project is still under construction</Box>
		</Box>
	);
};

const Search = () => {
	return <div>Search</div>;
};

export const ROUTES = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/playlist',
		exact: true,
		component: Library
	},
	{
		path: '/playlist/:playlistId',
		exact: true,
		component: Playlist
	},
	{
		path: '/search',
		exact: true,
		component: Search
	},
	{
		path: '*',
		exact: true,
		component: NoMatch
	}
];
