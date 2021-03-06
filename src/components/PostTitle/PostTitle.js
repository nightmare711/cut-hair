import React from 'react'
import { listPost } from 'constants/list-post'
import { listServices } from 'constants/services'
import './PostTitle.css'

export const PostTitle = ({ type }) => {
	if (type === 'post') {
		return (
			<div className='post-title'>
				<ul className='table-title'>
					<li className='heading-primary header'>Bài viết</li>
					{listServices.map((post) => (
						<li
							onClick={() =>
								window.open(`https://www.dichvusuachua-nguyenkim.com/post/${post.href}`, '_self')
							}
							className='content'
						>
							{post.content}
						</li>
					))}
				</ul>
			</div>
		)
	}
	return (
		<div className='post-title'>
			<ul className='table-title'>
				<li className='heading-primary header'>Dịch Vụ Liên Quan</li>
				{listPost.map((post) => (
					<li
						onClick={() =>
							window.open(`https://www.dichvusuachua-nguyenkim.com/services/${post.href}`, '_self')
						}
						className='content'
					>
						{post.header.content}
					</li>
				))}
			</ul>
		</div>
	)
}
