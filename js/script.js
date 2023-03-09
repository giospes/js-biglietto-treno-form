const discountY = .20
const discountS = .40
const priceKm = .21
const genButton = document.querySelector("#genera")
const resButton = document.querySelector("#reset")
const biglietto = document.querySelector("#biglietto")
let id, km, age, price, carrozza, codice;


genButton.addEventListener("click", generate)

resButton.addEventListener("click", reset)


function generate(){
    biglietto.classList.remove("d-none")
    id = document.querySelector("#nome").value
    km = document.querySelector("#km").value
    age = document.querySelector("#eta").value
    km = parseInt(km)
    
    price = km*priceKm
    if(age == 'Minorenne'){
        price = price*(1 - discountY)
    }
    if(age == 'Senior'){
        price = price*(1 - discountS)
    }
    price = Math.round(price * 100) / 100
    carrozza = Math.floor(Math.random()*20)
    codice = Math.floor(Math.random()*10000)
    document.getElementById("nome-display").innerHTML = id
    document.getElementById("offerta-display").innerHTML = age
    document.getElementById("carrozza-display").innerHTML = carrozza
    document.getElementById("codice-display").innerHTML = codice
    document.getElementById("price-display").innerHTML = price

}

function reset(){
    biglietto.classList.add("d-none")
    document.querySelector("#nome").value = ""
    document.querySelector("#km").value = ""
    document.querySelector("#eta").value = "Minorenne"
}