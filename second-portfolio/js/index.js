// ------------------BIO SECTION------------------------------

const bio = document.querySelector('#bio');
const timeline = document.querySelector('#timeline')
const expandedPane = document.querySelector('.expandedPane');
const briefPane = document.querySelector('.briefPane')
const cmoreBtn = document.querySelector(".cmoreBtn")
const panes = document.getElementsByClassName('.pane')

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
    else if (e.target.dataset.id == 2019){
        flatironModal()
    } else if (e.target.dataset.id == 2020){
        cornellModal()
    }
})


briefPane.addEventListener('mouseleave', e => {
    briefPane.style.display = "none"
    briefPane.className="briefPane"
    briefPane.innerText = ''
    cmoreBtn.style.top = ""
})

cmoreBtn.addEventListener('click', e => {
    briefPane.style.display = "none"
})

function davieModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader davieHeader"
    itemHeader.innerText = "~2006"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody davieBody"
    liOne.innerText = "My hometown, 25 miles north of Miami"
    briefPane.appendChild(liOne)


    briefPane.className="briefPane davie"
    briefPane.style.display = "block"

    cmoreBtn.style.display = "block"
    cmoreBtn.style.top = "25px"
    briefPane.appendChild(cmoreBtn)
}


function fsuModal(){
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader tallyHeader"
    itemHeader.innerText = "2014"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody tallyBody"
    liOne.innerHTML = `B.A. <br> <a target="_blank" class="lightBlue" href="https://english.fsu.edu/programs/editing-writing-and-media">Editing, Writing, and Media</a><br> Florida State University`
    briefPane.appendChild(liOne)

    briefPane.style.display = "block"
    briefPane.className="briefPane tally"

    cmoreBtn.style.display = "block"
    cmoreBtn.style.top = "55px"
    briefPane.appendChild(cmoreBtn)
}

function thailandModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader thailandHeader"
    itemHeader.innerText = "2016"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody thailandBody"
    liOne.innerText = "lived in Thailand and pursued a fight career in Muay Thai. I had 9 fights in 7 months and won the Thapae Stadium Championship."
    briefPane.appendChild(liOne)

    briefPane.style.display = "block"
    briefPane.className="briefPane thailand"

    cmoreBtn.style.display = "block"
    cmoreBtn.style.top = "53px"
    briefPane.appendChild(cmoreBtn)
}

function nycModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader nycHeader"
    itemHeader.innerText = "2017"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody nycBody"
    liOne.innerHTML = `Moved to NYC to chase big fights and world class training from <a class="lightBlue" target="_blank" href="https://www.youtube.com/watch?v=IB32gkmsst4">Ajarn Phil Nurse</a>`
    briefPane.appendChild(liOne)

    briefPane.style.display = "block"
    briefPane.className="briefPane nyc"

    cmoreBtn.style.display = "block"
    cmoreBtn.style.top = "40px"
    briefPane.appendChild(cmoreBtn)
}

function flatironModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader flatironHeader"
    itemHeader.innerText = "2019"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody flatironBody margin-top"
    liOne.innerText = "Flatiron School: Access Labs"
    briefPane.appendChild(liOne)

    var liTwo = document.createElement('p')
    liTwo.className="itemBody flatironBody"
    liTwo.innerHTML = `<a class="lightBlue" href="https://flatironschool.com/career-courses/coding-bootcamp#curriculum" target="_blank">Software Engineering Program</a>`
    briefPane.appendChild(liTwo)

    var liThree = document.createElement('p')
    liThree.className="itemBody flatironBody margin-bottom"
    liThree.innerText = "Graduated October 2019"
    briefPane.appendChild(liThree)

    briefPane.style.display = "block"
    briefPane.className="briefPane flatiron"

    cmoreBtn.style.display = "block"
    cmoreBtn.style.top = "50px"
    briefPane.appendChild(cmoreBtn)
}

function cornellModal() {
    var itemHeader = document.createElement("p")
    itemHeader.className = "itemHeader cornellHeader"
    itemHeader.innerText = "2020"
    briefPane.appendChild(itemHeader)

    var liOne = document.createElement('p')
    liOne.className="itemBody cornellBody"
    liOne.innerText = "Web Analyst, hired February 2020"
    briefPane.appendChild(liOne)

    // var liTwo = document.createElement('p')
    // liTwo.className="itemBody cornellBody"
    // liTwo.innerText = "PHP - DRUPAL - Pantheon"
    // briefPane.appendChild(liTwo)

    briefPane.style.display = "block"
    briefPane.className="briefPane cornell"

    cmoreBtn.style.display = "block"
    cmoreBtn.style.top = "25px"
    briefPane.appendChild(cmoreBtn)
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