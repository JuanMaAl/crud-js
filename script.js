var selectedRow = null;

function onFormSubmit() {
    if (ValidityState()) {
        var formData = readFormData();
        if (selectedRow == null) insrtNewRecord(formData);
        else updateRecord(formData);
        resetForm();
    }
}