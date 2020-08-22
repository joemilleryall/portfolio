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
    
    // else if (e.target.dataset.id == 2014){
    //     fsuModal()
    // } else if (e.target.dataset.id == 2016){
    //     thapaeModal()
    // } else if (e.target.dataset.id == 2017){
    //     nycModal()
    // } else if (e.target.dataset.id == 2019){
    //     flatironModal()
    // } else if (e.target.dataset.id == 2020){
    //     cornellModal()
    // }
})


briefPane.addEventListener('mouseleave', e => {
    briefPane.style.display = "none"
    briefPane.innerText = ''
    briefPane.className="briefPane"
})

closeBtn.addEventListener('click', e => {
    briefPane.style.display = "none"
})

function davieModal() {
    // var itemHeader = document.createElement("p")
    // itemHeader.className = "itemHeader"
    // itemHeader.innerText = "~2006"
    // briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody davieBody"
    liOne.innerText = "My hometown, 25 miles north of Miami"
    briefPane.appendChild(liOne)

    // var liTwo = document.createElement('p')
    // liTwo.className="itemBody davieBody"
    // liTwo.innerText = "I left in 2006 for college in Tallahassee where I earned a Bachelor's degree"
    // briefPane.appendChild(liTwo)

    briefPane.className="briefPane davie"

    // var pane = document.querySelector("#davie")
    // pane.className = "pane davie"


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
    liOne.innerText = "My college years in Tallahassee turned out to be more about progressing through Combat Sports than studying"
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
    liOne.innerText = "While living in Thailand"
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
    liOne.innerText = "After a year back in Tallahassee, we decided"
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