
//Desestructurar
interface Reproductor{
    volumen:number
    segundo:number
    cancion:string
    detalles:Detalles
}

interface Detalles{
    autor:string
    year:number
}

const reproductor:Reproductor={
    volumen: 10,
    segundo: 66,
    cancion: 'Las mañanitas',
    detalles: {
        autor:'Cepillin',
        year:1967
    }
}

console.log(`El volumen actual es: ${reproductor.volumen}`)
console.log(`Los segundos son: ${reproductor.segundo}`)
console.log(`La cancion actual es: ${reproductor.cancion}`)
console.log(`El autor es: ${reproductor.detalles.autor}`)

const{volumen, segundo, cancion, detalles}=reproductor
const{autor}=detalles
console.log(`El volumen actual es: ${volumen}`)
console.log(`Los segundos son: ${segundo}`)

const colores:string[]=['blue','red','green','violet']
console.log(`Color 1: ${colores[0]}`)
console.log(`Color 2: ${colores[1]}`)
console.log(`Color 3: ${colores[2]}`)

const[azul,,x,b]=colores
console.log(`Color 2: ${0}`)