import React from 'react'
import './Home.css'

export const Home = () => {
	return (
		<div className='home-page'>
			<img
				className='banner'
				src='https://res.cloudinary.com/danhpq17/image/upload/v1626860692/banner_pcleib.jpg'
				alt='Banner'
			/>
			<div className='container-flex'>
				<div className='left-side'>
					<h1>VÌ SAO CHỌN CHÚNG TÔI</h1>
					<br />
					<span className='title-extend'>
						Chúng tôi đem đến cho các bạn những dịch vụ tốt nhất như dịch vụ sửa chửa tủ lạnh, máy
						lạnh, máy giặt, tivi, bình nước nóng, tủ lạnh và lò vi sóng đảm bảo uy tín tuyệt với chi
						phí hợp lý nhât.
					</span>
					<div className='container-grid-2'>
						<div className='item item-1'>
							<img
								src='https://res.cloudinary.com/danhpq17/image/upload/v1628132613/support_scvoli.png'
								alt='support'
							/>
							<div className='content'>
								<span className='title'>Dịch Vụ Sửa Chữa + Bảo Hành</span>
								<span>
									Với phương châm “ Sản phẩm tốt chưa đủ, phải là dịch vụ tốt”, đến với TRUNG TÂM
									NGUYỄN KIM quý..
								</span>
							</div>
						</div>
						<div className='item item-1'>
							<img
								src='https://res.cloudinary.com/danhpq17/image/upload/v1628132613/support_scvoli.png'
								alt='support'
							/>
							<div className='content'>
								<span className='title'>Dịch Vụ Sửa Chữa + Bảo Hành</span>
								<span>
									Với phương châm “ Sản phẩm tốt chưa đủ, phải là dịch vụ tốt”, đến với TRUNG TÂM
									NGUYỄN KIM quý..
								</span>
							</div>
						</div>
						<div className='item item-1'>
							<img
								src='https://res.cloudinary.com/danhpq17/image/upload/v1628132613/support_scvoli.png'
								alt='support'
							/>
							<div className='content'>
								<span className='title'>Dịch Vụ Sửa Chữa + Bảo Hành</span>
								<span>
									Với phương châm “ Sản phẩm tốt chưa đủ, phải là dịch vụ tốt”, đến với TRUNG TÂM
									NGUYỄN KIM quý..
								</span>
							</div>
						</div>
						<div className='item item-1'>
							<img
								src='https://res.cloudinary.com/danhpq17/image/upload/v1628132613/support_scvoli.png'
								alt='support'
							/>
							<div className='content'>
								<span className='title'>Dịch Vụ Sửa Chữa + Bảo Hành</span>
								<span>
									Với phương châm “ Sản phẩm tốt chưa đủ, phải là dịch vụ tốt”, đến với TRUNG TÂM
									NGUYỄN KIM quý..
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container-banner'>
				<img
					src='https://res.cloudinary.com/danhpq17/image/upload/v1628132686/bannerNK2_cqw4fy.jpg'
					alt='Banner'
					className='banner-2'
				/>
			</div>
		</div>
	)
}
