import './style.css';
import logoImage from "./logo.png"
import { createHome } from './home';


function createHeader() {
    const header = document.createElement("div")
    header.classList.add("header")

    const logo = document.createElement("img")
    logo.id = "logo"
    logo.src = logoImage
    

    const navBar = document.createElement("nav")
    const homeButton = document.createElement("button")
    homeButton.textContent = "Home"
    const menuButton = document.createElement("button")
    menuButton.textContent = "Menu"
    const contactButton = document.createElement("button")
    contactButton.textContent = "Contact Us"
    navBar.appendChild(homeButton)
    navBar.appendChild(menuButton)
    navBar.appendChild(contactButton)

    header.appendChild(logo)
    header.appendChild(navBar)

    return header

}

function buildPage() {
    const content = document.querySelector("#content")
      
    content.appendChild(createHeader())
    content.appendChild(createHome())
}

buildPage();

