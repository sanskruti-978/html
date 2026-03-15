
  const keys = document.querySelectorAll(".key");

  const whiteKey = document.querySelectorAll(".key.white")

  const blackKey = document.querySelectorAll(".key.black")

  keys.forEach(key => key.addEventListener("click", handleKeyClick));

  function handleKeyClick(){
    playKey(this)
  }

  function playKey(key){

    const keyAUdio = document.getElementById(key.dataset.note);
    
    keyAUdio.currentTime = 0;

    keyAUdio.play();

    key.classList.add("active");

    keyAUdio.addEventListener("ended",()=>{

      key.classList.remove("active");

    });

  }