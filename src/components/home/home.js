import { Box, Grid, Typography, Link } from '@mui/material';

const style = {
	top: 0,
	left: 0,
	height: '100vh',
	width: '100%',
	flexDirection: 'column'
};

const Home = () => {
	const textCard = {
		fontSize: 18,
		color: 'white',
		backgroundColor: 'background.elevatedHighlight',
		textAlign: 'center',
		padding: '10px',
		paddingTop: '10px',
		paddingBottom: '10px',
		borderRadius: '14px',
		boxShadow: '0px 0px 25px 10px rgba(0,0,0,0.5)',
		marginBottom: { md: '20px', sm: '10px' }
	};
	const Header = {
		fontSize: 24,
		color: 'white',
		backgroundColor: 'background.elevatedHighlight',
		textAlign: 'center',
		paddingTop: '5px',
		paddingBottom: '20px',
		borderRadius: '20px',
		boxShadow: '0px 0px 25px 10px rgba(0,0,0,0.5)',
		marginBottom: { md: '20px', sm: '10px' }
	};
	return (
		<Box sx={style} className="gradient-animation">
			<Grid
				container
				spacing={0}
				direction="row"
				alignItems="center"
				justifyContent="center"
				sx={{ height: '100%', padding: '30px' }}
			>
				<Grid item xs={8} md={4} lg={3}>
					<Box sx={Header}>
						<h1 style={{ margin: 0 }}>Welcome to my Spotify Clone</h1>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: { md: '20px', sm: '10px' } }}>
						<img
							style={{
								width: '400px',
								borderRadius: '14px',
								boxShadow: '0px 0px 25px 10px rgba(0,0,0,0.5)'
							}}
							src="Pics/My-pic.jpg"
							alt=""
						/>
					</Box>
					<Box sx={textCard}>
						<Typography style={{ margin: 0, marginBottom: '10px' }}>
							This app was created using{' '}
							<Link
								href="https://reactjs.org/docs/getting-started.html"
								alt=""
								rel="noopener noreferrer"
								target={'_blank'}
							>
								React
							</Link>{' '}
							and{' '}
							<Link
								href="https://redux.js.org/api/api-reference"
								alt=""
								rel="noopener noreferrer"
								target={'_blank'}
							>
								Redux
							</Link>
							. I've been using{' '}
							<Link
								href="https://developer.spotify.com/documentation/general/guides/"
								alt=""
								rel="noopener noreferrer"
								target={'_blank'}
							>
								Spotify's API
							</Link>{' '}
							to connect you securely with this app. <br />
							Styled with{' '}
							<Link
								href="https://mui.com/getting-started/installation/"
								alt=""
								rel="noopener noreferrer"
								target={'_blank'}
							>
								material UI <br />
							</Link>
							<br />
							Created by{' '}
							<Link
								href="https://mui.com/getting-started/installation/"
								alt=""
								rel="noopener noreferrer"
								target={'_blank'}
							>
								William Granath
							</Link>
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
