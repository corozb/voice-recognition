const btnStart = document.getElementById('btnStart')
const btnStop = document.getElementById('btnStop')
const btnPlay = document.getElementById('play')
const texto = document.getElementById('texto')

let recognition = new webkitSpeechRecognition()
recognition.lang = 'es-Es'
recognition.continuous = true // recognize the voice while I'm speaking
recognition.interimResults = false // type when we make a pause

recognition.onresult = (event) => {
	const results = event.results
	const frase = results[results.length - 1][0].transcript
	texto.value += frase
}

recognition.onend = (event) => alert("the mic it's not listening")
recognition.onerror = (event) => event.error

btnStart.addEventListener('click', () => {
	recognition.start()
})

btnStop.addEventListener('click', () => {
	recognition.abort()
})

btnPlay.addEventListener('click', () => readText(texto.value))

function readText(texto) {
	const speech = new SpeechSynthesisUtterance()
	speech.text = texto
	speech.volume = 1
	speech.rate = 0.5
	speech.pitch = 1

	window.speechSynthesis.speak(speech)
}
