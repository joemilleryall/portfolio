// ------------------BIO SECTION------------------------------

const bio = document.querySelector('#bio');
const timeline = document.querySelector('#timeline')
const expandedPane = document.querySelector('.expandedPane');
const briefPane = document.querySelector('.briefPane')
const closeBtn = document.querySelector(".closeBtn")

timeline.addEventListener('mouseover', e => {
    if (e.target.dataset.id == 2006){
        davieModal()
    }     
    else if (e.target.dataset.id == 2014){
        fsuModal()
    } 
    else if (e.target.dataset.id == 2016){
        thailandModal()
    } 
    else if (e.target.dataset.id == 2017){
        nycModal()
    } 
    // else if (e.target.dataset.id == 2019){
    //     flatironModal()
    // } else if (e.target.dataset.id == 2020){
    //     cornellModal()
    // }
})


briefPane.addEventListener('mouseleave', e => {
    briefPane.style.display = "none"
    briefPane.className="briefPane"
    briefPane.innerText = ''
})

closeBtn.addEventListener('click', e => {
    briefPane.style.display = "none"
})

function davieModal() {
    // var overlay = document.createElement('div')
    // overlay.className="overlay"
    // briefPane.appendChild(overlay)

    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader davieHeader"
    itemHeader.innerText = "~2006"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody davieBody"
    liOne.innerText = "My hometown, 25 miles north of Miami"
    briefPane.appendChild(liOne)


    briefPane.className="briefPane davie"

    // var pane = document.querySelector("#davie")
    // pane.className = "pane davie"


    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}


function fsuModal(){
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader tallyHeader"
    itemHeader.innerText = "2014"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody tallyBody"
    liOne.innerText = "Bachelor's in Editing, Writing, and Media Florida State University"
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"
    briefPane.className="briefPane tally"

    briefPane.appendChild(closeBtn)
}

function thailandModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader thailandHeader"
    itemHeader.innerText = "2016"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody thailandBody"
    liOne.innerText = "I lived in Thailand as a freelancer and pursued a fight career in Muay Thai. I had 9 fights in 7 months and won the Thapae Stadium Championship."
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"
    briefPane.className="briefPane thailand"

    briefPane.appendChild(closeBtn)
}

function nycModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader nycHeader"
    itemHeader.innerText = "2017"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody nycBody"
    liOne.innerText = "Moved to NYC to chase big fights with the lady of my dreams."
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"
    briefPane.className="briefPane nyc"

    briefPane.appendChild(closeBtn)
}

function flatironModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader"
    itemHeader.innerText = "2019"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody"
    liOne.innerText = "i decided to shift my priorities from fighting to professional development"
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
    liOne.innerText = " february of 2019, four months after the bootcamp"
    briefPane.appendChild(liOne)

    // closeBtn.style.display = "block"
    briefPane.style.display = "block"

    briefPane.appendChild(closeBtn)
}

// ------------------BIO SECTION END------------------------------
// ------------------SKILLS SECTION-------------------------------

// const skills = document.querySelector("#skills")

// skills.addEventListener('mouseover', e => {
//     if (e.target.dataset.id == 1){
//         foundationModal()
//     } else if (e.target.dataset.id == 2){
//         bestThreeModal()
//     } else if (e.target.dataset.id == 3){
//         bootcampModal()
//     } else if (e.target.dataset.id == 4){
//         cornellModal()
//     }
// })

// function foundationModal() {
//     var itemHeader = document.createElement("p")
//     itemHeader.className = "itemHeader"
//     itemHeader.innerText = "2014"
//     briefPane.appendChild(itemHeader)

//     var liOne = document.createElement('p')
//     liOne.className="itemBody"
//     liOne.innerText = "Tallahassee was more about combat sports than college for me. "
//     briefPane.appendChild(liOne)

//     // closeBtn.style.display = "block"
//     briefPane.style.display = "block"

//     briefPane.appendChild(closeBtn)
// }