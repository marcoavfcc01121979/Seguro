// Obter a diferença de anos
export function obterDiferencaAno(year) {
    return new Date().getFullYear() - year;
}

// calcula total a pagar segundo a marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeu': 
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico': 
            incremento = 1.05;
            break;
        default:
            break;
    }   
    return incremento;    
}

// calcula plano
export function calculaPlano(plan) {
    let incremento;

    switch (plan) {
        case 'basico':
            incremento = 1.20;
            break;
        case 'completo':
            incremento = 1.50;
            break;
        default:
            break;
    }
    return incremento;
}

// Mostrar a primeira letra maiuscula
export function primeiraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}