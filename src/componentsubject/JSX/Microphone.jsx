import React, { useState, useEffect } from 'react'
import "../CSS/Microphone.css"

const Microphone = () => {

    const [listening, setlistening] = useState(false)
    
    const startthemic = () => {
        const textscreen = document.getElementById("textscreen")
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new window.SpeechRecognition();
        recognition.continuous = true
        recognition.interimResults = true;

        let p = document.createElement("p")

        recognition.addEventListener("result", (e) => {
            const text = Array.from(e.results).map(result => result[0])
                .map(result => result.transcript)
                .join("")
            console.log(text);
            textscreen.innerHTML = text;
        })
        if(!listening){
            recognition.start();
            setlistening(true)
        }
        else{
            recognition.stop();
            setlistening(false)
        }
    }
    
    useEffect(() => {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new window.SpeechRecognition();
        recognition.continuous = true
        recognition.interimResults = true;

        recognition.addEventListener("result", (e) => {
            const text = Array.from(e.results).map(result => result[0])
                .map(result => result.transcript)
                .join("")
            console.log(text);
        })
        }, [])



        return (<div className='Microphone-component-holder'>
            <div className="mic-body">
                <div className="mic-holder">
                    <div className="mic" onClick={startthemic}>
                        <i className="fa-solid fa-microphone"></i>
                    </div>
                </div>
                <div className="mic-tester">
                   {listening ?<div className="mic-directions">" Speak Now "</div>:<div className="mic-directions">"Enter your audio"</div>}
                   {listening ?<div className="mic-actions"> "Listening"</div>:<div className="mic-actions"> "Waiting for input"</div>}
                </div>
            </div>
            <div className="texts container" id='textscreen'>
            </div>
        </div>
        )
    }

export default Microphone