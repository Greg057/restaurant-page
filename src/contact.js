import logoImage from "./logo.png"

export function createContact() {
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const logo = document.createElement("img")
    logo.id = "logo"
    logo.src = logoImage

    const teltext = document.createElement("h4")
    teltext.classList.add("tel")
    teltext.textContent = "Call us: 123 456 789"

    const visittext = document.createElement("h4")
    visittext.classList.add("visit")
    visittext.textContent = "Visit us: 12 Hollywood Boulevard, Los Angeles, CA."

    
    contact.appendChild(teltext)
    contact.appendChild(visittext)
    contact.appendChild(logo)

    return contact
}