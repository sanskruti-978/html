  const colourDisplaySection = document.getElementById("colour-dispaly");
  const newColourBtnElement = document.getElementById("new-colour-button");
  const currentColourElement = document.getElementById("current-colour");

  const hexValues = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


  function getRandomHexValue(){
    const randomIndexPosion = Math.floor(Math.random() *hexValues.length);
    const randomValue = hexValues[randomIndexPosition];
    return randomValue;
  }

  function getRandomHexString(stringLength){
    let hexString = '';
    for( let i = 0; i < stringLength; i++){
      hexString += getRandomHexValue();
    }
    return hexString;
  }



    newColourBtnElement.addEventListener("click",function(){
      const randomHexString = '#' + getRandomHexString(6);
      document.body.style.setProperty('background-color', randomHexString);
      currentColourElement.textContent = randomHexString;
      colourDisplaySection.style.borderColor = randomHexString

    });