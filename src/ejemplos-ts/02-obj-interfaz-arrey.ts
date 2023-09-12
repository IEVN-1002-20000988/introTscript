

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

let mascotas=['perro', 'gato' , 'perico']
mascotas[1]='Perico Verde'
mascotas.push('gato dos')
console.table(mascotas)