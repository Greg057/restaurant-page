import burger1 from "./burger1.png"
import burger2 from "./burger2.png"
import burger3 from "./burger3.png"
import burger4 from "./burger4.png"
import burger5 from "./burger5.png"
import burger6 from "./burger6.png"

export function createMenu() {
    const menu = document.createElement("div")
    menu.classList.add("menu")

    const menuDisplay = document.createElement("div")
    menuDisplay.classList.add("menu-display")

    const textMenu = document.createElement("h1")
    textMenu.textContent = "Our Burgers"

    const burgers = [
                    ["The Monster", burger1, 10.99],
                    ["The Chonker", burger2, 12.99],
                    ["The Cheesy", burger3, 9.99],
                    ["The Mountain", burger4, 11.99],
                    ["The Athelete", burger5, 13.99],
                    ["The Caloric", burger6, 11.99]]

    burgers.forEach(burger => {
        menuDisplay.appendChild(createItem(burger[0], burger[1], burger[2]))
    })
      
    menu.appendChild(textMenu)
    menu.appendChild(menuDisplay)
    return menu
}

function createItem(name, img, price) {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    const itemImage = document.createElement("img")
    itemImage.src = img

    const itemName = document.createElement("h2")
    itemName.textContent = name

    const itemPrice = document.createElement("div")
    itemPrice.textContent = `$${price}`

    menuItem.appendChild(itemImage)
    menuItem.appendChild(itemName)
    menuItem.appendChild(itemPrice)

    return menuItem

}