const bio = document.querySelector('#bio');
const timeline = document.querySelector('#timeline')
const expandedPane = document.querySelector('.expandedPane');



timeline.addEventListener('mouseover', e => {
    if (e.target.dataset.id == 2006){
        davieModal()
    } else if (e.target.dataset.id == 2014){
        fsuModal()
    } else if (e.target.dataset.id == 2016){
        thapaeModal()
    } else if (e.target.dataset.id == 2017){
        nycModal()
    } else if (e.target.dataset.id == 2019){
        flatironModal()
    } else if (e.target.dataset.id == 2020){
        cornellModal()
    }
})
var modalContainer = document.createElement("div")
    modalContainer.className = "expandedPane"

expandedPane.addEventListener('mouseleave', e => {
    expandedPane.style.display = "none"
})

function davieModal() {
    var modalContainer = document.createElement("div")
    modalContainer.className = "expandedPane"
    modalContainer.style.display = "block"

    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2006 - Davie, Florida"

    modalContainer.appendChild(itemHeader)
    bio.appendChild(modalContainer)
    console.log(modalContainer)
}


function fsuModal(){
    var modalContainer = document.createElement("div")
    modalContainer.className = "expandedPane"
    expandedPane.style.display = "block"

    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2014 - Tallahassee, Florida"

    modalContainer.appendChild(itemHeader)
    bio.appendChild(modalContainer)
    console.log(modalContainer)
}

function thapaeModal() {
    var modalContainer = document.createElement("div")
    modalContainer.className = "expandedPane"
    expandedPane.style.display = "block"
}

function nycModal() {
    var modalContainer = document.createElement("div")
    modalContainer.className = "expandedPane"
    expandedPane.style.display = "block"
}

function flatironModal() {
    var modalContainer = document.createElement("div")
    modalContainer.className = "expandedPane"
    expandedPane.style.display = "block"
}

function cornellModal() {
    var modalContainer = document.createElement("div")
    modalContainer.className = "expandedPane"
    expandedPane.style.display = "block"
}