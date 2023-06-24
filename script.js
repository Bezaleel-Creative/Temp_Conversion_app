const temp = document.querySelector('.tempInput');
const celcius = document.querySelector('#celcius');
const fahrenheit = document.querySelector('#fahrenheit');
const convertBtn = document.querySelector('.submit');
const answer = document.querySelector('.converted');
const container = document.querySelector('.container');

let tempInput = 0;
let tempConvt;

function toCelcius(y){
    tempConvt = Math.round(((y - 32) * 5/9) * 10) / 10;
    return tempConvt
}
function toFahrenheit(y){
    tempConvt = Math.floor(((y * 9/5) + 32) * 10) /10;
    return tempConvt
}


convertBtn.addEventListener('click', ()=>{
   tempInput = Number(temp.value)
   if (celcius.checked){
    toCelcius(tempInput)
    answer.innerHTML = `Answer: ${tempConvt}°C`
   }
   else if (fahrenheit.checked){
    toFahrenheit(tempInput)
    answer.innerHTML = `Answer: ${tempConvt}°F`
   }   
})


