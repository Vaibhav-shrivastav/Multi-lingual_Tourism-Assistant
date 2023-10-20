import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  const [trans, setTrans] = useState(""); // Move useState outside of the event handler.

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleTranscriptChange = (e) => {
    setTrans(transcript); 
    console.log(transcript)// Update 'trans' state when transcript changes.
  };

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p onChange={handleTranscriptChange}>{transcript}</p>
      <h1>{trans}</h1>
    </div>
  );
};
export default Speech;
