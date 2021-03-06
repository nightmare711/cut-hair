import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import RoomIcon from '@material-ui/icons/Room'
import './Contact.css'

export const Contact = () => {
	return (
		<div className='contact'>
			<div className='container-contact'>
				<RoomIcon />
				Thời gian mở cửa: 7h:00 - 22h:00
			</div>
			<div className='container-contact'>
				<PhoneIcon />
				Hotline: 0775811523 - 02822432939
			</div>
			<div className='container-contact'>
				<AccessAlarmIcon />
				Địa chỉ: TP.HCM - Hỗ Trợ
			</div>
		</div>
	)
}
