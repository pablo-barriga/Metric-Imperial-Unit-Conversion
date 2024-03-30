/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204
const valueEl = document.getElementById("unit-value")
const convertBtn = document.getElementById("btn-convert")

convertBtn.addEventListener("click", function(){
    let num = 0
    if(valueEl.value){
        num = valueEl.value
    }
    
    lengthEl.textContent =`${num} meters = ${metersToFeet(num)} feet | ${num} feet = ${feetsToMeter(num)} meters`

    volumeEl.textContent =`${num} liters = ${litersToGallons(num)} gallons | ${num} liters = ${gallonsToLiters(num)} gallons`

    massEl.textContent =` ${num} kilograms = ${kilogramsToPounds(num)} pounds | ${num} pounds = ${poundsToKilograms(num)} kilograms`

})

function metersToFeet(num){
    return (num * meterToFeet).toFixed(3)
}
function feetsToMeter(num){
    return (num / meterToFeet).toFixed(3)
}
function litersToGallons(num){
    return (num * literToGallon).toFixed(3)
}
function gallonsToLiters(num){
    return (num / literToGallon).toFixed(3)
}
function kilogramsToPounds(num){
    return (num * kilogramToPound).toFixed(3)
}
function poundsToKilograms(num){
    return (num / kilogramToPound).toFixed(3)
}