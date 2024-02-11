function togglemode() {
  const htlm = document.documentElement
  htlm.classList.toggle('light')

  const img = document.querySelector("#profile img")


  if(htlm.classList.contains("light")) {

    img.setAttribute('src', './assets/2.png')
  } else {
    img.setAttribute('src', "./assets/2.png")
  }  
}