$( document ).ready(function() {
  console.log("ready");
  var bodyparts = [
    "rechte Hand",
    "linke Hand",
    "rechter Fuß",
    "linker Fuß"
  ]

  var inputs = document.getElementsByTagName("input")

  $(document).click(function() {
    console.log("click");
    var colors = []

    for (var i = 0; i < inputs.length; i++) {
      var current = inputs[i]
      if (current.checked) {
        colors.push(current.value)
      }
    }

    var random = Math.floor(Math.random() * 4)
    $("#bodypart").html(bodyparts[random])

    var random = Math.floor(Math.random() * colors.length)
    $("#color").html(colors[random])
  })
})
