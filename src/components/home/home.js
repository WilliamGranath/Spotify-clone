import { Box, Grid } from '@mui/material';

const style = {
	position: 'fixed',
	top: 0,
	left: 0,
	height: '100vh',
	width: '100%'
};

const Home = () => {
	const textCard = {
		fontSize: 18,
		backgroundColor: '#242424',
		color: 'white',
		textAlign: 'center',
		padding: '30px',
		paddingTop: '10px',
		paddingBottom: '10px',
		borderRadius: '14px',
		boxShadow: '0px 0px 25px 10px rgba(0,0,0,0.5)'
	};
	return (
		<Box sx={style} className="gradient-animation">
			<Grid
				container
				spacing={0}
				direction="row"
				alignItems="center"
				justifyContent="center"
				sx={{ height: '100%', padding: '30px', paddingLeft: { md: '300px', sm: '30px' } }}
			>
				<Grid item xs={8} md={4} lg={3}>
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
						<h3 style={{ margin: 0, marginBottom: '10px' }}>spotify clone</h3>
						{'My name is William and this is my final examinetion from my web-dev course'}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
