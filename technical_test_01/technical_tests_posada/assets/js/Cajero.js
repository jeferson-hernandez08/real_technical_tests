class Cajero {
    constructor() {
        this.billetes = {
            200: 5,
            100: 6,
            50: 3,
            20: 5,
            10: 5,
            5: 2,
            2: 7,
            1: 9
        }
        this.historial = []
        this.denominaciones = Object.keys(this.billetes).sort((a, b) => b - a);
    }

    retiro(monto) {
        if (monto <= 0) {
            alert("El monto debe ser mayor a cero.")
            return
        }

        let montoPrincipal = monto;
        let billetesEnRetiro = {};
        let totalRetirado = 0;

        for (let i = 0; i < this.denominaciones.length; i++) {
            if (montoPrincipal >= this.denominaciones[i]) {
                let numeroBilletes = Math.min(
                    Math.floor(montoPrincipal / this.denominaciones[i]),
                    this.billetes[this.denominaciones[i]]
                )

                if (numeroBilletes > 0) {
                    billetesEnRetiro[this.denominaciones[i]] = numeroBilletes
                    this.billetes[this.denominaciones[i]] -= numeroBilletes
                    montoPrincipal -= numeroBilletes * this.denominaciones[i]
                    totalRetirado += numeroBilletes * this.denominaciones[i]
                }
            }
        }

        

        if (montoPrincipal === 0) {
            alert(`¡Retiro de: \$${monto} exitoso!`);
            // console.log(this.historial)
            for(const denominacion in billetesEnRetiro) {
                const ul = document.querySelector('.ul')
                const li = document.createElement('li')
                li.textContent = billetesEnRetiro[denominacion] + ' billetes de $' + denominacion
                ul.appendChild(li)
            }
            this.historial.push
        } else {
           alert(`No se puede dispensar la cantidad solicitada de \$${monto} con las denominaciones disponibles.`);
            for (const denominacion in billetesEnRetiro) {
                this.billetes[denominacion] += billetesEnRetiro[denominacion];
            }
        }


    }
}   

// CLIENTE

const cajero01     = new Cajero();
let input          = document.querySelector('.input')
const buttonRetiro = document.querySelector('#retirar')
const ul           = document.querySelector('.ul')

buttonRetiro.addEventListener('click', () => {
    let monto = parseInt(input.value)
    cajero01.retiro(monto)
    input.value = ''
})

input.addEventListener('keyup', (event) => {
    ul.innerHTML = ''
})