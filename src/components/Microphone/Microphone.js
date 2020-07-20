import React from 'react'

import './Microphone.css'

export default function Microphone({ speech, checked, setChecked }) {
	return (
		<>
			<input
				type='checkbox'
				id='speaker'
				checked={checked}
				onChange={() => setChecked(!checked)}></input>
			<label htmlFor='speaker' className='mic-container'>
				<span className='microphone' onClick={speech}>
					<i className='fas fa-microphone'></i>
				</span>
				<svg
					width='120px'
					height='120px'
					viewBox='0 0 100 100'
					className='charger'>
					<circle className='circle' cx='50' cy='50' r='46' />
					<circle className='loader' cx='50' cy='50' r='46' />
				</svg>
				<div className='dotWrapper'>
					<i className='fas fa-circle'></i>
					<i className='fas fa-circle'></i>
					<i className='fas fa-circle'></i>
				</div>
			</label>
		</>
	)
}
