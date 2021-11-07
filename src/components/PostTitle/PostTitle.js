import React from 'react'
import { listPost } from 'constants/list-post'
import './PostTitle.css'

export const PostTitle = () => {
	return (
		<div className='post-title'>
			<ul className='table-title'>
				<li className='heading-primary header'>Dịch Vụ Liên Quan</li>
				{listPost.map((post) => (
					<li onClick={() => window.open(post.href, '_blank')} className='content'>
						{post.header.content}
					</li>
				))}
			</ul>
		</div>
	)
}
