import './style.css';
import logoImage from "./logo.png"
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';


function createHeader() {
    const header = document.createElement("div")
    header.classList.add("header")

    const logo = document.createElement("img")
    logo.id = "logo"
    logo.src = logoImage
    
    const navBar = document.createElement("nav")

    const contactButton = document.createElement("button")
    contactButton.textContent = "Contact Us"
    navBar.appendChild(createButton("Home", createHome()))
    navBar.appendChild(createButton("Menu", createMenu()))
    navBar.appendChild(createButton("Contact Us", createContact()))

    header.appendChild(logo)
    header.appendChild(navBar)

    return header

}

function createButton(text, target) {
    const button = document.createElement("button")
    button.textContent = text
    button.addEventListener("click", () => {
        const main = document.querySelector(".main")
        main.innerHTML = "";
        main.appendChild(target)
    })
    return button
}


function buildPage() {
    const content = document.querySelector("#content")
    const main = document.createElement("div")
    main.classList.add("main")
      
    content.appendChild(createHeader())
    content.appendChild(main)
    main.appendChild(createHome())
}

buildPage();

