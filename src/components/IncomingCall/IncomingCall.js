import React from 'react'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import './IncomingCall.css'

export const IncomingCall = () => {
	return (
		<div className='call-animation'>
			<div className='img-circle'>
				<PhoneInTalkIcon />
			</div>
		</div>
	)
}
