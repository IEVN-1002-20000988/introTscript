
class Persona2{
    nombre:string
    edad: number

    constructor(a:string, b:number){
        this.nombre=a
        this.edad=b
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`)
    }
}

let persona2:Persona2
persona2=new Persona2('Mario',24)
persona2.imprimir()

class Dado{
    private Valor:number
    public tirar(){
        this.generar()
    }
    private generar(){
        this.Valor=Math.floor(Math.random()*6)+1
    }
    public imprimir(){
        console.log(`Salio el valor ${this.Valor}`)
    }
}

let dado1 = new Dado
dado1.tirar()
dado1.imprimir()

class Persona3{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`)
    }
}