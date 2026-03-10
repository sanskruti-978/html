
const resultElement = document.getElementById("results");
let recognition;


  function startConverting(){
      if('webkitSpeechRecognition' in window){
        recognition = new webkitSpeechRecognition();
        setupRecoginition(recognition);
        recognition.start();
      }
  }


  function setupRecoginition(recognition){

    recognition.continuous = true;

    recognition.interimResult = true;

    recognition.lang = 'en-US';

    recognition.onresults = function(event){

        / / processResult()


      processResult(event.results);

    }

  }
  

  function processResult(results){


    let finalTransmit = '';
    let interTransmit = '';

    for (let i = 0; i < results.length; i++){


      let transcript = results[i][0].transcript;
      transcript.replace("\n","<br>");

      if(results[i].isFinal){

        finalTranscript += transcript
      }

    }

  }









  function stopConverting(){

  }