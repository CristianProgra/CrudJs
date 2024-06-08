//variables globales
let campoTexto = document.querySelector("#campo-texto");
let btnCrear = document.querySelector("#btn-crear");
let table = document.querySelector("#tabla-tareas > tbody");

//agregar evento al boton
btnCrear.addEventListener("click", ()=>{
    //alert("escribiste: "+ campoTexto.value);
    crearTarea();
});

//agregar evento al campo de texto
campoTexto.addEventListener("keyup", (e)=>{
    //console.log(e.key);
    if(e.key == "Enter"){
        crearTarea();
    }
});

let con = 1;
//funcion para crear una tarea
function crearTarea() {
    //verificar si se escribio en el campo de texto
    if( campoTexto.value == "" ){
        alert("Debes escribir una tarea");
    }else{
        //alert("Todo esta listo");
        let textoTarea = campoTexto.value;
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${con++} </td>
            <td>${textoTarea} </td>
            <td>
                <button class="btn btn-warning" type="button">✍</button>
                <button onclick="eliminarTarea();" class="btn btn-danger" type="button">🗑</button>
            </td>
        `;
        table.appendChild(fila);
        campoTexto.value = "";
    }
}

//funcion para eliminar una tarea
function eliminarTarea(){
    let confimar = confirm("¿Deseas eliminar esta tarea?");
    //console.log(event.target);
    if(confimar){
        let btn = event.target;//devuelve la etiqueta que genera el evento
        btn.parentElement.parentElement.remove(); //selecciona la etiqueta padre y la elimina
    }
}


