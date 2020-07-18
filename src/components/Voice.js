import React from 'react'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'

import StartButton from './StartButton'
import StopButton from './StopButton'
import TextArea from './TextArea'
import PlayButton from './PlayButton'

export default function Voice() {
	const { transcript, resetTranscript } = useSpeechRecognition()

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		return null
	}

	const SpeechToText = () =>
		SpeechRecognition.startListening({
			continuous: true,
			language: 'es-CO',
			interimResults: false,
		})
	const StopType = () => SpeechRecognition.abortListening()

	const ReadText = () => {
		const speech = new SpeechSynthesisUtterance()
		speech.text = transcript
		speech.volume = 1
		speech.rate = 0.4
		speech.pitch = 2
		window.speechSynthesis.speak(speech)
	}

	return (
		<>
			<StartButton speech={SpeechToText} />
			<StopButton stop={StopType} />
			<button onClick={resetTranscript}>Reset</button>
			<TextArea transcript={transcript} />
			<PlayButton play={ReadText} />
		</>
	)
}
