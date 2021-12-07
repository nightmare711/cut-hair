import React from 'react'
// import Logo from 'assets/LOGO.jpeg'
import HomeIcon from '@material-ui/icons/Home'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import PublicIcon from '@material-ui/icons/Public'
import { LocationOn } from '@material-ui/icons'
import { listPost } from 'constants/list-post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-content footer-1'>
				<img
					src='https://res.cloudinary.com/danhpq17/image/upload/v1638785569/logo3_xc4ebj.png'
					alt='Logo'
				/>
				<ul className='list-content'>
					<li className='content'>TRUNG TÂM BẢO HÀNH</li>
					<li className='content'>
						<HomeIcon />
						Trụ sở chính : 179B Lý Thường Kiệt, phường 8, Quận Tân Bình
					</li>
					<li className='content'>
						<PhoneIcon />
						0775811523 - 02822432939
					</li>
					<li className='content'>
						<EmailIcon />
						dichvusuachua-nguyenkim.com@gmail.com
					</li>
					<li className='content'>
						<PublicIcon />
						dichvusuachua-nguyenkim.com
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 1: 20/17 Nguyễn Cảnh Chân, P. Nguyễn Cư Trinh, Quận 1, Tp. HCM.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 2: 109/5 Đường số 6, P. Bình Trưng Tây, Quận 2, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 3: 159/20A Đường Lê Văn Sỹ, P. 12, Quận 3, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 4: 129F/101/154P, Bến Vân Đồn, P. 8, Quận 4, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 5: 541/2A, Đường Nguyễn Trãi, P. 8, Quận 5, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 6: 241/14B Nguyễn Văn Luông, P. 11, Quận 6, Tp. Hồ Chí Minh
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 7: 8A Đường số 3, P. Tân Phú, Quận 7, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 8: 41C Trương Đình Hội, P. 16, Quận 8, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 9: 5/8 Đường số 23, P. Bình Trưng Tây, Quận 9, Tp. Hồ Chí Minh
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 10: 651 Đội Cung, P. 8, Quận 11, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 11: 298A Thạnh Xuân 14, P. Thạnh Xuân, Quận 12, Tp. Hồ Chí
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 12: 398 Ngô Đức Kế, P. 12, Quận Bình Thạnh, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 13: 289 Đường số 57, P. Tân Tạo, Quận Bình Tân, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 14: 78/12C Lê Văn Phan, P. Phú Thọ Hoà, Quận Tân Phú, Tp. HCM.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 15: 74/2A Đường Đỗ Tấn Phong, P. 9, Quận Phú Nhuận, Tp. HCM.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 16: 98C Đường C22, P. 12, Quận Tân Bình, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 17: 40/9B Đường Số 9, P. 16, Quận Gò Vấp, Tp. Hồ Chí Minh.
					</li>
					<li className='content'>
						<LocationOn />
						Chi nhánh 18: 18A/35 Đường Số 13, P. Linh Chiểu, Thủ Đức, Tp. Hồ Chí Minh.
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
