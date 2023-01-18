const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})

let disponible = document.getElementById('disponible')
let totalIngresos = document.getElementById('totalIngresos')
let totalGastos = document.getElementById('totalGastos')

let ingresos = 10000
let gastos = 9000
let montoDisponible = ingresos - gastos

disponible.innerText = `$ ${montoDisponible}`
totalIngresos.innerText = `$ ${ingresos}`
totalGastos.innerText = `$ ${gastos}`

if (montoDisponible >= 0) {
    disponible.style.color = `green`
} else {
    disponible.style.color = `red`
}

