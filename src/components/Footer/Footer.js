import React from 'react'
import Logo from 'assets/LOGO.jpeg'
import HomeIcon from '@material-ui/icons/Home'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import PublicIcon from '@material-ui/icons/Public'
import { listPost } from 'constants/list-post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-content footer-1'>
				<img src={Logo} alt='Logo' />
				<ul className='list-content'>
					<li className='content'>TRUNG TÂM BẢO HÀNH NGUYỄN KIM</li>
					<li className='content'>
						<HomeIcon />
						Trụ sở chính : 179B Lý Thường Kiệt, phường 8, Quận Tân Bình
					</li>
					<li className='content'>
						<PhoneIcon />
						0775811523
					</li>
					<li className='content'>
						<EmailIcon />
						trungtambaohanhnguyenkim@gmail.com
					</li>
					<li className='content'>
						<PublicIcon />
						trungtambaohanhnguyenkim.com
					</li>
				</ul>
			</div>
			<div className='footer-content footer-2'>
				<h2 className='title'> Bài viết mới</h2>
				<div className={'panel-body'}>
					<ul className='list-content'>
						{listPost.map((item) => (
							<li className='content'>
								<a href={`/services/${item.href}`}>
									<span>{item.header.content}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='footer-content footer-2'>
				<h2 className='title'> Bài viết mới</h2>
				<div className={'panel-body'}>
					<ul className='list-content'>
						{listPost.map((item) => (
							<li className='content'>
								<a href={`/services/${item.href}`}>
									<span>{item.header.content}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='footer-content footer-2'>
				<h2 className='title'>Kết nối với chúng tôi</h2>
				<div className='conect'>
					<a href='/' className='item facebook'>
						<FontAwesomeIcon className='icon' icon={faFacebook} />
					</a>
					<a href='/' className='item instagram'>
						<FontAwesomeIcon className='icon' icon={faInstagram} />
					</a>
					<a href='/' className=' item youtube'>
						<FontAwesomeIcon className='icon' icon={faYoutube} />
					</a>
				</div>
			</div>
		</div>
	)
}
