import React from 'react';
import './registerstyle.css';

function Register() {
	return (
		<div className='register-bg'>
			<button className='register-btn'>
				<a target='_blank' href='https://forms.gle/tU6QUA8yrmgdwXn5A'>
					Register Here
				</a>
			</button>
			<button className='register-btn'>
				<a href='/template.pptx' download>
					Download Template
				</a>
			</button>
		</div>
	);
}

export default Register;
