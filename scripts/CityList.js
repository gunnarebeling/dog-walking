import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const Cities = getCities();

document.addEventListener("click", 
    (clickedItem) =>{
        const itemClicked = clickedItem.target
        let walkerList = walkers.filter(walker => walker.cityId === parseInt(itemClicked.dataset.id))
        let walkerListNames = walkerList.map(walker => walker.name)

        walkerListNames = walkerListNames.join(' , ');

        if (itemClicked.dataset.type === "city") {
           
                    
                    window.alert(`${walkerListNames} is servicing this city`)
                }
                
    }
        
    
)


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of Cities) {
        citiesHTML += `<li data-type="city" data-id="${city.id}" data-name="" >${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

