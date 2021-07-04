import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import './Navbar.css'

const listNavbar = [
	{
		name: 'Sản phẩm loa',
		href: 'sanphamloa',
	},
	{
		name: 'Sản phẩm loa',
		href: 'sanphamloa',
	},
	{
		name: 'Sản phẩm loa',
		href: 'sanphamloa',
	},
	{
		name: 'Sản phẩm loa',
		href: 'sanphamloa',
	},
	{
		name: 'Sản phẩm loa',
		href: 'sanphamloa',
	},
	{
		name: 'Sản phẩm loa',
		href: 'sanphamloa',
	},
]

export const Navbar = () => {
	return (
		<div className='navbar'>
			<ul className='list-item'>
				<li className='item menu-item'>
					<Link to='/'>
						<span className='content'>Sản phẩm các loại</span>
						<MenuIcon />
					</Link>
				</li>
				{listNavbar.map((nav, index) => (
					<li className='item'>
						<Link key={index} to={nav.href}>
							{nav.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
