import { database } from "./database.js"

const walkers = database.walkers


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.fullName}</li>`
    }

    walkerHTML += "</ul>"

}

