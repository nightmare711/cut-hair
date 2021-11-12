import React from 'react'
import './Home.css'

export const Home = () => {
	return (
		<div className='home-page'>
			<img
				className='banner'
				src='https://res.cloudinary.com/danhpq17/image/upload/v1635668962/banner1_xmicf8.jpg'
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
					src='https://res.cloudinary.com/danhpq17/image/upload/v1636716306/bannerNK2.1_hckvgk.jpg'
					alt='Banner'
					className='banner-2'
				/>
			</div>
			<div className='home-service'>
				<h1> Các dịch vụ của chúng tôi </h1>
				<div>
					<a href='services/sua-may-lanh' className='service'>
						<img
							src='https://res.cloudinary.com/danhpq17/image/upload/v1635663631/suamaylanh_c0ipoz.png'
							alt='suamaylanh'
						/>
					</a>
					<a href='services/sua-may-giat' className='service'>
						<img
							src='https://res.cloudinary.com/danhpq17/image/upload/v1635663633/suamaygiac_qxcpvk.png'
							alt='suamaygiac'
						/>
					</a>
					<a href='services/tho-sua-tivi-tai-nha' className='service'>
						<img
							src='https://res.cloudinary.com/danhpq17/image/upload/v1635663697/suativi_lootf2.png'
							alt='suamaytivi'
						/>
					</a>
					<a href='services/sua-tu-lanh' className='service'>
						<img
							src='https://res.cloudinary.com/danhpq17/image/upload/v1635663709/suatulanh_jh00ti.png'
							alt='suatulanh'
						/>
					</a>
				</div>
			</div>
			<div className='home-quality'>
				<h1>Chất lượng dịch vụ của chúng tôi</h1>
				<img
					src='https://res.cloudinary.com/danhpq17/image/upload/v1635664739/quality_oteqju.jpg'
					alt='quality'
					className='img-quality'
				/>
				<ol className='list-quanlity'>
					<li>Kiểm tra trình trạng máy trước khi sửa chữa.</li>
					<li>Xác định bộ phận hư hỏng, mức độ hư hỏng của máy.</li>
					<li>Tư vấn khách hàng nguyên nhân dẫn đến hư hỏng.</li>
					<li>Đưa ra phương án tối ưu nhất để sửa chữa hay thay mới.</li>
					<li>Báo giá cho bạn trước khi sửa chữa hoặc thay mới linh kiện.</li>
					<li>Sửa chữa và thay thế linh phụ kiện đúng đời và chính hãng.</li>
					<li>Cấp phiếu bảo hành và tư vấn cách sử dụng đúng kỹ thuật cho bạn.</li>
				</ol>
			</div>
			<div className='home-intro'>
				<h1>Giới thiệu về công ty</h1>
				<p>
					Trung tâm dịch vụ sửa chữa và bảo hành Nguyễn Kim được ủy quyền linh phụ kiện và kỹ thuật
					của các hãng điện tử TOSHIBA, LG, PANASONIC, SAMSUNG, SANYO, DAIKIN, REETECH…
				</p>
				<p>
					Chuyên sửa chữa <b>máy lạnh, tủ lạnh, máy giặt, tivi </b> tận nhà Cho các hộ
					<b>gia đình, công ty, khu công nghiệp, chung cư, tòa nhà… </b>Với đội ngũ kỹ sư, nhân viên
					kỹ thuật đông và tận tình sẽ có mặt để chăm sóc và hỗ trợ khách hàng tại các Quận Thành
					Phố Hồ Chí Minh.
				</p>
				<img
					src='https://res.cloudinary.com/danhpq17/image/upload/v1636716339/gioithieu_wgu19l.png'
					alt='quality'
					className='img-quality'
				/>
			</div>
		</div>
	)
}
