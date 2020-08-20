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

expandedPane.addEventListener('mouseleave', e => {
    expandedPane.style.display = "none"
    expandedPane.innerText = ''
})

function davieModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2006 - Davie, Florida"

    expandedPane.appendChild(itemHeader)
    expandedPane.style.display = "block"
}


function fsuModal(){
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2014 - Tallahassee, Florida"

    expandedPane.appendChild(itemHeader)
    expandedPane.style.display = "block"
}

function thapaeModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2016 - Chiang Mai, Thailand"

    expandedPane.appendChild(itemHeader)
    expandedPane.style.display = "block"
}

function nycModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2017 - NYC - Moved"

    expandedPane.appendChild(itemHeader)
    expandedPane.style.display = "block"
}

function flatironModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2019 - Brooklyn, New York"

    expandedPane.appendChild(itemHeader)
    expandedPane.style.display = "block"
}

function cornellModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2020 - NYC"

    expandedPane.appendChild(itemHeader)
    expandedPane.style.display = "block"
}