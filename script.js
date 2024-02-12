var filaSeleccionada = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (filaSeleccionada == null) insertNewRecord(formData);
        else updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombreCompleto"] = document.getElementById("nombreCompleto").value;
    formData["email"] = document.getElementById("email").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["ciudad"] = document.getElementById("ciudad").value;
    return formData;
}

function insertNewRecord(data) {
    var tabla = document.getElementById("listaEmpleados").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow(tabla.length);
    celda1 = nuevaFila.insertCell(0);
    celda2 = nuevaFila.insertCell(1);
    celda3 = nuevaFila.insertCell(2);
    celda4 = nuevaFila.insertCell(3);
    celda5 = nuevaFila.insertCell(4);
    celda1.innerHTML = data.nombreCompleto;
    celda2.innerHTML = data.email;
    celda3.innerHTML = data.salario;
    celda4.innerHTML = data.ciudad;
    celda5.innerHTML = `<a onClick="onEdit(this)">Editar</a>;
                        <a onClick="onDelete(this)">Borrar</a>`;
}

function resetForm() {
    document.getElementById("nombreCompleto").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("ciudad").value = "";
    filaSeleccionada = null;
}

function onEdit(td) {
    filaSeleccionada = td.parentElement.parentElement;
    document.getElementById("nombreCompleto").value = filaSeleccionada.cells[0].innerHTML;
    document.getElementById("email").value = filaSeleccionada.cells[1].innerHTML;
    document.getElementById("salario").value = filaSeleccionada.cells[2].innerHTML;
    document.getElementById("ciudad").value = filaSeleccionada.cells[3].innerHTML;
}

function onDelete(td) {
    if (confirm('Estas seguro que quieres eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById("listaEmpleados").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid = true;
    if (document.getElementById("nombreCompleto").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide")){
            document.getElementById("nameValidationError").classList.add("hide");
        }
    }
    return isValid;
}