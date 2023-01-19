/*const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})*/

(function load () {
    const $form = document.querySelector("#jsForm")
    const contenedorGastos = document.querySelector("#contenedorGastos")
    function impresionHtml (contenedor, tarea, tarea2) {
        contenedor.innerHTML += `
        <li class="imprimir">
            <span class="tarea">${tarea}</span>
            <span class="tarea2">$${tarea2}</span>
            <section class="btnAccion">
                <i class="fa-solid fa-trash-can"></i>
            </section>
        </li>
        `
    }
    $form.addEventListener("submit", (event) => {
        event.preventDefault()
        const data = new FormData($form)
        const gastoTexto = data.get("gastoTexto")
        const gastoNumero = data.get("gastoNumero")
        impresionHtml(contenedorGastos, gastoTexto, gastoNumero)
    })
})()


