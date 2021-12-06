import React from 'react'
// import Logo from 'assets/LOGO.jpeg'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
				<img
					src='https://res.cloudinary.com/danhpq17/image/upload/v1638785569/logo3_xc4ebj.png'
					alt='Logo'
				/>
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
