import React from 'react'
import Logo from 'assets/LOGO.jpeg'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
				<img src={Logo} alt='Logo' />
			</Link>
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
