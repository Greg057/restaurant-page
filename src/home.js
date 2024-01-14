import burger from './image.jpg';

export function createHome () {
    const main = document.createElement("div")

    const burgerImg = document.createElement("img")
    burgerImg.id = "burger-img"
    burgerImg.src = burger

    main.appendChild(burgerImg)
    
    return main
    
}



