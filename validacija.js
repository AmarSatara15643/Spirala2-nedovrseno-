$(document).ready(function () {
$('#AddAccount').click(function () {

    var inVal = $("#AccountText").val();

    if (inVal.length == 0) {
        alert("textbox value can't be empty");
        $("#AccountText").focus();
    }
});