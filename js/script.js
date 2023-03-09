const discountY = .20
const discountS = .40
const priceKm = .21
const genButton = document.querySelector("#genera")
const resButton = document.querySelector("#reset")
let id, km, age;


genButton.addEventListener("click", generate(priceKm, discountY, discountS))


function generate(priceKm, discountYoung, discountSenior){
    id = document.querySelector("#nome").value
    km = document.querySelector("#km").value
    age = document.querySelector("#eta").value
    km = parseInt(km)
    price = km*priceKm
    console.log(km)
    console.log(age)
    if(age == 'Minorenne'){
        price = price*(1 - discountYoung)
    }
    if(age == 'Senior'){
        price = price*(1 - discountSenior)
    }
    price = Math.round(price * 100) / 100
    console.log(price)

}