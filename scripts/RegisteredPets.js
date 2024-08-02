import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()


document.addEventListener("click",
    (clickevent) =>{
      const whatWasClicked = clickevent.target
      const walkerid = whatWasClicked.dataset.walkerforeignkey
      const walkers = getWalkers()
      for (const walker of walkers) {
        if(walker.id === parseInt(walkerid)){
            window.alert(`this pet is being walked by ${walker.name}`)
        }
        
      }

      
      
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-type="pet" data-walkerforeignkey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

