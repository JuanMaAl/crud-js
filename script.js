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
