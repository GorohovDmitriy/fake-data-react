import {AppBar, Toolbar, Typography} from '@mui/material'
import {Box} from '@mui/system'
import React from 'react'

const Header = () => {
	return (
		<Box sx={{flexGrow: 1, marginBottom: 2}}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h4' component='div' sx={{flexGrow: 1}}>
						Сhoose language
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
