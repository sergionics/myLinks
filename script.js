function toggleMode() {
  //pegar tag html
  const html = document.documentElement
  //trocar modo light / dark
  html.classList.toggle("light")

  //pegar img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/sergionics-avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/sergionics-avatar.png")
  }
}
