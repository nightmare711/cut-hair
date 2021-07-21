import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import { listPost } from 'constants/list-post'
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
				{listPost
					.filter((post, index) => index <= 4)
					.map((post, index) => (
						<li className='item'>
							<Link key={index} to={`/services/${post.href}`}>
								{post.header.content}
							</Link>
						</li>
					))}
			</ul>
		</div>
	)
}
