import React from 'react'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import './IncomingCall.css'

export const IncomingCall = () => {
	return (
		<div className='phone-call'>
			<div onClick={() => window.open('tel:0775811523', '_self')} className=' call-animation'>
				<PhoneInTalkIcon />
			</div>
			<span className='phone'>0775811523</span>
		</div>
	)
}
