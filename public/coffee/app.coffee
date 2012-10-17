$ ->
  $('#rainbow').load ->  
    img = new Image
    canvas = document.createElement("canvas")
    ctx = canvas.getContext("2d")
    img.crossOrigin = "Anonymous"
    img.src = this.getAttribute('src')

    img.onload = =>
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      for rgb in createPalette(img, 5)
        color = "rgb(#{rgb.join(", ")})"
        $("#colors").append("<li style='background-color:#{color}'></li>")