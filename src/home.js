import burger from './image.jpg';

export function createHome () {
    const home = document.createElement("div")
    home.classList.add("home")

    const burgerImg = document.createElement("img")
    burgerImg.id = "burger-img"
    burgerImg.src = burger

    const brandName = document.createElement("div")
    brandName.classList.add("overlay-text")
    brandName.textContent = "Uptown Burger"
    brandName.id = "brand-name"

    const textHome = document.createElement("div")
    textHome.classList.add("overlay-text")
    textHome.textContent = "Come enjoy the best burgers in town!"
    textHome.id = "text-home"


    home.appendChild(burgerImg)
    home.appendChild(brandName)
    home.appendChild(textHome)
    
    return home
    
}




