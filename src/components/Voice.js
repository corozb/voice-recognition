import React, { useState } from 'react'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'
import swal from 'sweetalert'

import Microphone from './Microphone/Microphone'
import TextArea from './TextArea'

export default function Voice() {
	const { transcript, resetTranscript } = useSpeechRecognition()
	const [checked, setChecked] = useState(false)

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		return null
	}

	const SpeechToText = () => {
		SpeechRecognition.startListening({
			continuous: true,
			language: 'es-CO',
			interimResults: false,
		})
	}

	const Stop = () => {
		SpeechRecognition.stopListening()
		setChecked(false)
		swal('Listo!', 'Detuviste la grabación!', 'success')
	}

	const ReadText = () => {
		const speech = new SpeechSynthesisUtterance()
		speech.text = transcript
		speech.volume = 1
		speech.rate = 0.8
		speech.pitch = 1
		window.speechSynthesis.speak(speech)
	}

	return (
		<div className='container'>
			<div className='container-title'>
				<h2>Vamos! Hazme un dictado</h2>
			</div>
			<Microphone
				speech={SpeechToText}
				checked={checked}
				setChecked={setChecked}
			/>
			<TextArea transcript={transcript} />
			<div className='navbar'>
				<span onClick={Stop}>
					<i className='far fa-stop-circle'></i>
				</span>
				<span onClick={ReadText}>
					<i className='far fa-play-circle'></i>
				</span>
				<span onClick={resetTranscript}>
					<i className='fas fa-eraser'></i>
				</span>
			</div>
		</div>
	)
}
