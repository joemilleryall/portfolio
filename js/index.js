const bio = document.querySelector('#bio');
const timeline = document.querySelector('#timeline')
const expandedPane = document.querySelector('.expandedPane');
const briefPane = document.querySelector('.briefPane')
const closeBtn = document.querySelector(".closeBtn")

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


briefPane.addEventListener('mouseleave', e => {
    briefPane.style.display = "none"
    briefPane.innerText = ''
})

closeBtn.addEventListener('click', e => {
    briefPane.style.display = "none"
})

function davieModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "~2006"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody"
    liOne.innerText = "I was born and raised in Davie, FLorida. I left in 2006 after highschool for college in Tallahassee where I earned a Bachelor's in Editing, Writing, and Media from Florida State"
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}


function fsuModal(){
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2014"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody"
    liOne.innerText = ""
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}

function thapaeModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2016"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody"
    liOne.innerText = ""
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}

function nycModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2017"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody"
    liOne.innerText = ""
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}

function flatironModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2019"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody"
    liOne.innerText = ""
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}

function cornellModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2020"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody"
    liOne.innerText = ""
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}