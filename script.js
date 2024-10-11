let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', () => {
    wishme();

    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new speechRecognition();

    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;    
        takeCommand(transcript)
    };

    btn.addEventListener("click", () => {
        recognition.start();
        btn.style.display="none"
        voice.style.display="block"
    });
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("Hey")){ 
        speak("Hello! My name is Lisa , What Can I Help You?")
    }
    else if(message.includes("who are you")){
        speak("I am Your Virtual Assistance ,created By mr Swapnil sir")
    }
    else if(message.includes("what can you do")){
        speak("I can Do anything , I can Assist you to do your works , and many more things using voice command")
    }
    else if(message.includes("thank you")){
        speak("Your Welcome , have a Great Day")
    }
    else if(message.includes("open YouTube")){
        speak("Opening Youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open Google")){
        speak("Opening Google")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open Gmail")){
        speak("Opening Gmail")
        window.open("https://mail.google.com/mail","_blank")
    }
    else if(message.includes("open maps")){
        speak("Opening Maps")
        window.open("https://www.google.com/maps","_blank")
    }
    else if(message.includes("open GitHub")){
        speak("Opening GitHub")
        window.open("https://github.com/","_blank")
    }
    else if(message.includes("open Whatsapp")){
        speak("Opening Whatsapp")
        window.open("https://whatsapp.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("Opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open Visual Studio Code")){
        speak("Opening Visual Studio Code")
        window.open("Visual Studio Code://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let day=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(day)
    }
    else{
        let finalText="This is What I found on Internet regarding" + message.replace("Jarvis","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Jarvis","")}`,"_blank")
    }
}
