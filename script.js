const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const showText = document.querySelector("#show-text");
function compareValues(sum,luckyNumber){
  if(sum%luckyNumber===0){
   showText.innerText="Your birthday is lucky 🔥";
  }else{
   showText.innerText="Your birthday is not lucky 😕";
  }
}

function checkBirthDateIsLucky(){
  const birthDate = dateOfBirth.value;
  const sum = calculateSum(birthDate);
  if(sum&&birthDate)
  compareValues(sum,luckyNumber.value)
  else  
  showText.innerText="please enter both the fields 😡";
}

function calculateSum(birthDate) {
  birthDate= birthDate.replaceAll("-","");
  var sum = 0;
  for(var i=0; i<birthDate.length; i++){
    sum = sum + Number(birthDate.charAt(i));
  }
  return sum;

}


checkNumberButton.addEventListener('click' ,checkBirthDateIsLucky)


