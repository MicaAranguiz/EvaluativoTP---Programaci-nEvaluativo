class Clinica {
    constructor(nombre, duenio, respjur, doctores, enfermeros) {
        this.duenio = duenio;
        this.nombre = nombre;
        this.respjur = respjur;
        this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
    mostrarclinica(){
        return `el dueño es: ${this.duenio}`
    }
}

class Profesional {
    constructor(nombre, apellido, matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }
}
class Doctor extends Profesional {
    constructor(nombre, apellido, especialidad, matricula) {
        super(nombre, apellido, matricula);
        this.especialidad = especialidad;
    }
    mostrardoc() {
        return ` informacion del doctor
        ${this.nombre}, ${this.apellido}`
    }
    mostrarturno() {

    }
}
class Enfermero extends Profesional {
    constructor(nombre, apellido, matricula, pacientes, licenciatura) {
        super(nombre, apellido, matricula);
        this.pacientes = pacientes;
        this.licenciatura = licenciatura;
    }
}
class Paciente {
    constructor(nombrepac, apellidopac, dni, fechanac, turno, obrasocial, anioactual) {
        this.nombrepac = nombrepac;
        this.apellidopac = apellidopac;
        this.dni = dni;
        this.fechanac = fechanac;
        this.turno = turno;
        this.obrasocial = obrasocial;
        this.anioactual = anioactual
    }
    edad() {
       let edadtotal = this.anioactual - this.fechanac;
        document.write(edadtotal);
    }
    mostrarpaciente() {
        return ` informacion del paciente
        ${this.nombre}, ${this.apellido}`  
      }
    datosPaciente(){
        return this.nombrepac+" - "+this.apellidopac+"||"+this.dni+" pulgadas ,"+this.turno+" "
    }
}
let pacientescoleccion = []
function ingresarPacientes(){
    let nombrepac = document.getElementById("nombre").value
    let apellidopac= document.getElementById("apellido").value
    let dni = document.getElementById("dni").value
    let fechanac = document.getElementById("fechanac").value
    let turno = parseInt(document.getElementById("turno").value)
    let anioactual = parseInt(document.getElementById("anioactual").value)
    let obrasocial = (document.getElementById("obrasocial").value)
    let paciente1 = new Paciente(nombrepac,apellidopac,dni,fechanac,turno,anioactual,obrasocial)
    pacientescoleccion.push(paciente1)
    let div = document.getElementById("demo") //div donde se incrusta todo
    let p = document.createElement("p")
    div.appendChild(p)
}

function mostrarPacientes(){
  console.log(pacientescoleccion)
  let subtotal = 0
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = ""
        for (const item of pacientescoleccion) {
            let li = document.createElement("li")
            li.textContent = item.datosPaciente()
            ul.appendChild(li)
        }
    }else{
        for (const item of pacientescoleccion) {
            let li = document.createElement("li")
            li.textContent = item.datosPaciente()
            ul.appendChild(li)
        }
    }
    for (const item of pacientescoleccion) {
        subtotal = subtotal + item.precio
        document.getElementById("subtotal").innerHTML = subtotal
        
    }
}


/* METO DATOS DENTRO DE CADA CLASE */

let doctor1 = new Doctor("Micaela", "Aranguiz", 1921928131, "pediatra")
console.log(doctor1)
console.log(doctor1.mostrardoc())
doctor1.mostrardoc()

let enfermero1 = new Enfermero ("mariano", "orozco", 2398923, "No se")
console.log(enfermero1)


let clinica1 = new Clinica("Alberto Fernandez", "Moguillansky", "no se", (doctor1),(enfermero1))
console.log(clinica1)
clinica1.mostrarclinica()
console.log(clinica1.mostrarclinica())



