import React from 'react'
import Logo from 'assets/LOGO.jpeg'
import { TextField } from '@material-ui/core'
import './Header.css'

export const Header = () => {
	return (
		<div className='header-container'>
			<img src={Logo} alt='Logo' />
			<TextField
				autoComplete='off'
				id='outlined-basic'
				label='Search'
				variant='outlined'

				// InputProps={{
				// 	startAdornment: (
				// 		<InputAdornment position='start'>
				// 			<SearchIcon />
				// 		</InputAdornment>
				// 	),
				// }}
			/>
		</div>
	)
}
