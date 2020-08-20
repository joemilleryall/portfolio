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

expandedPane.addEventListener('mouseleave', e => {
    expandedPane.style.display = "none"
    expandedPane.innerText = ''
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
    itemHeader.innerText = "2006 - Davie, Florida"

    var itemUl = document.createElement('ul')

    var liOne = document.createElement('li')
    liOne.className="itemBody"
    liOne.innerText = "I was born and raised in Davie, Fl."
    itemUl.appendChild(liOne)

    var liTwo = document.createElement('li')
    liTwo.innerText = "I began combat sports competition in 2005"
    liTwo.className="itemBody"
    itemUl.appendChild(liTwo)

    var liThree = document.createElement('li')
    liThree.innerText = "I graduated from William T. Mcfatter Tehnical Highschool in 2006"
    liThree.className="itemBody"
    itemUl.appendChild(liThree)



    briefPane.appendChild(itemHeader)
    briefPane.appendChild(itemUl)
    briefPane.appendChild(closeBtn)

    closeBtn.style.display = "block"
    briefPane.style.display = "block"

    // const viewPane = document.querySelector('#viewPane')
    // viewPane.innerText = ""

    // const newViewPane = document.createElement('div')
    // newViewPane.className = "newViewPane"

    // pTag = document.createElement('p')
    // pTag.className = 'viewPaneBody'
    // pTag.innerText = "davie"

    // newViewPane.appendChild(pTag)
    // viewPane.appendChild(newViewPane)
}


function fsuModal(){
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2014 - Tallahassee, Florida"

    briefPane.appendChild(itemHeader)
    briefPane.appendChild(closeBtn)

    closeBtn.style.display = "block"
    briefPane.style.display = "block"
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