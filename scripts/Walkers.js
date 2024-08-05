import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
document.addEventListener("click",
    (click) =>{
        const whatWasClickedOn = click.target
       if (whatWasClickedOn.dataset.type === "walker") {
            for (const city of cities) {
                if (city.id === parseInt(whatWasClickedOn.dataset.cityId)){
                    
                    window.alert(`this walker works in ${city.name}`)
                }
                
            }
        
       } 
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                    data-city="${walker.cityId}"
                    data-type= "walker">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

