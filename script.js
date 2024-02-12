var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) insertNewRecord(formData);
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
    celda5.innerHTML = `<a onClick="onEdit(this)>Editar</a>
                        <a onClick="onDelete(this>Borrar</a>)`;
}