class Clinica {
    constructor(nombre, duenio, respjur, doctores, enfermeros) {
        this.duenio = duenio;
        this.nombre = nombre;
        this.respjur = respjur;
        this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
    mostrarclinica(){
        return "el dueño es: " +this.duenio+ "y su nombre es: " +this.nombre;
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
        return "el doctor se llama" + this.nombre + "y su apellido es: " + this.apellido;
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
    constructor(nombre, apellido, dni, fechanac, turno, obrasocial, anioactual) {
        this.nombre = nombre;
        this.apellido = apellido;
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
        return "el paciente se llama" + this.nombre + "y su apellido es: " + this.apellido;
    }
}
let pacientes = []
function ingresarPacientes(){
    let nombre = document.getElementById("nombre").value
    let apellido= document.getElementById("apellido").value
    let dni = document.getElementById("dni").value
    let fechanac = document.getElementById("fechanac").value
    let turno = parseInt(document.getElementById("turno").value)
    let anioactual = parseInt(document.getElementById("anioactual").value)
    let obrasocial = parseInt(document.getElementById("obrasocial").value)
    let paciente = new Pacientes(nombre,apellido,dni,fechanac,turno,anioactual,obrasocial)
    pacientes.push(paciente)
    let div = document.getElementById("demo") //div donde se incrusta todo
    let p = document.createElement("p")
    p.textContent = paciente.mostrarpaciente()
    div.appendChild(p)
}

function mostrarPacientes(){
    let subtotal = 0
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = ""
        for (const item of televisores) {
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }else{
        for (const item of televisores) {
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }
    for (const item of televisores) {
        subtotal = subtotal + item.precio
        document.getElementById("subtotal").innerHTML = subtotal
        
    }
}






/* METO DATOS DENTRO DE CADA CLASE */

let doctor1 = new Doctor("Micaela", "Aranguiz", 1921928131, "pediatra")
console.log(doctor1)
doctor1.mostrardoc()

let paciente1 = new Paciente("xavier", "Ocare", 43338962, 2001, "21 p.m", "no se", 2022);
console.log(paciente1)
//muestro la edad del paciente sacando el año con las cuentas
document.write("la edad del paciente es: ");
paciente1.edad()



let enfermero1 = new Enfermero ("mariano", "orozco", 2398923, paciente1, "No se")
console.log(enfermero1)


let clinica1 = new Clinica("Alberto Fernandez", "Moguillansky", "no se", (doctor1),(enfermero1))
console.log(clinica1)
clinica1.mostrarclinica()