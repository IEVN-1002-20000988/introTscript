

interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
}

const alumno:Alumno = {
    nombre:'Juanito',
    email:'juanlopez@gmail.com'
}

console.log(alumno.nombre);