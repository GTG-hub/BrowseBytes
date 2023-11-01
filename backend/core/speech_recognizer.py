from huggingsound import SpeechRecognitionModel
model = SpeechRecognitionModel("jonatasgrosman/wav2vec2-large-xlsr-53-english")


def speech_recognizer(path: str):
    audio_path = [path]
    transcriptions = model.transcribe(audio_path)
    return transcriptions[0]['transcription']


#include<iostream>
#include<string>
#include<ctype.h>
using namespace std;
int main() {
    string s;
    cin>>s;
    for(int i=0;i<=s.size();i++)
    {
        int p=0;
        char c=s[i];
        for(int j=0;j<=s.size()-1;j=j+1)
    {
        if(s[i]==s[j])
        {
            p+=1;
        }
    }
        if(p>=2)
        {
            s.erase(i,1);
        }
    }
    int l=s.size();
    if(l%2==0)
    {
        cout<<"CHAT WITH HER!";
    }
    else
    {
        cout<<"IGNORE HIM!";
    }
}