

interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
}

const alumno:Alumno = {
    nombre:'Juanito',
    email:'juanlopez@gmail.com'
}

console.table(alumno)

let mascotas:string[]=['perro', 'gato' , 'perico']
mascotas[1]='Perico Verde'
mascotas.push('gato dos')
console.table(mascotas)

let tem:(string|number)[]=[]
tem.push('RCR')
tem.push(345)
