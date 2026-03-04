$(document).ready(function () {
  $("#decimal").on("input", function () {
    var decimal = parseInt($("#decimal").val());

    if (!isNaN(decimal)) {
      console.log("Decimal: " + decimal);
      $("#binary").val(decimal.toString(2));
      $("#octal").val(decimal.toString(8));
      $("#hexadecimal").val(decimal.toString(16).toUpperCase());
    } else {
      $("#binary, #octal, #hexadecimal").val("");
    }
  });

  $("#binary").on("input", function () {
    this.value = this.value.replace(/[^01]/g, '');
    var binary = $("#binary").val();
    var decimalValue = parseInt(binary, 2);

    if (!isNaN(decimalValue)) {
      $("#decimal").val(decimalValue);
      $("#octal").val(decimalValue.toString(8));
      $("#hexadecimal").val(decimalValue.toString(16).toUpperCase());
    } else {
      $("#decimal, #octal, #hexadecimal").val("");
    }
  });

  $("#octal").on("input", function () {
    var octalStr = $("#octal").val();
    var decimal = parseInt(octalStr, 8);

    if (!isNaN(decimal)) {
      $("#decimal").val(decimal);
      $("#binary").val(decimal.toString(2));
      $("#hexadecimal").val(decimal.toString(16).toUpperCase());
    } else {
      $("#decimal, #binary, #hexadecimal").val("");
    }
  });

  $("#hexadecimal").on("input", function () {
    this.value = this.value.replace(/[^0-9a-fA-F]/g, '');
    var hexStr = $("#hexadecimal").val();
    var decimal = parseInt(hexStr, 16);

    if (!isNaN(decimal)) {
      $("#decimal").val(decimal);
      $("#binary").val(decimal.toString(2));
      $("#octal").val(decimal.toString(8));
    } else {
      $("#decimal", "#binary", "#octal").val("");
    }
  });
});
