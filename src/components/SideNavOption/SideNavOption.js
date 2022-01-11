import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SideNavOption({ name, id }) {
	const history = useHistory();
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => history.push(`/playlist/${id}`)}>
				<ListItemText primary={name} sx={{ color: 'text.secondary' }} />
			</ListItemButton>
		</ListItem>
	);
}

export default SideNavOption;
