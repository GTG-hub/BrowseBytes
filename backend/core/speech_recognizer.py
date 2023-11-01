from huggingsound import SpeechRecognitionModel
model = SpeechRecognitionModel("jonatasgrosman/wav2vec2-large-xlsr-53-english")


def speech_recognizer(path: str):
    audio_path = [path]
    transcriptions = model.transcribe(audio_path)
    return transcriptions[0]['transcription']
