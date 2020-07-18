import React from 'react'

export default function TextArea({ transcript }) {
	return (
		<textarea
			id='texto'
			cols='30'
			rows='10'
			defaultValue={transcript}></textarea>
	)
}
