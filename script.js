var bodyparts = [
  "rechte Hand",
  "linke Hand",
  "rechter Fuß",
  "linker Fuß"
]

var element1 = document.getElementById("bodypart")
var element2 = document.getElementById("color")
var inputs = document.getElementsByTagName("input")

function roll() {
  var colors = [];

  for (var i = 0; i < inputs.length; i++) {
    var current = inputs[i]
    if (current.checked) {
      colors.push(current.value);
    }
  }

  var random = Math.floor(Math.random() * 4);
  element1.innerHTML = bodyparts[random];

  var random = Math.floor(Math.random() * colors.length);
  element2.innerHTML = colors[random];
}
