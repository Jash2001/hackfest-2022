import React from 'react';
import './registerstyle.css';

function Register() {
	return (
		<div className='register-bg'>
			<div className='register-btn'>Registration Closed</div>
			<button className='register-btn'>
				<a href='/template.pptx' download>
					Download Template
				</a>
			</button>
		</div>
	);
}

export default Register;
