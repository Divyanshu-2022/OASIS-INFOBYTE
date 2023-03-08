function ClearAll() {
  document.getElementById("input").value = "";
}

function cal() {
  var input = document.getElementById("input").value;
  var a = eval(input);
  document.getElementById("input").value = a;
  console.log(input);
}
