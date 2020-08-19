const expandedPane = document.querySelector('#expandedPane');
const timeline = document.querySelector('#timeline')


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
})

function davieModal() {
    var divTag = document.createElement("div")
    divTag.className = "expandedPane"
    expandedPane.style.display = "block"
}

function fsuModal(){
    var divTag = document.createElement("div")
    divTag.className = "expandedPane"
    expandedPane.style.display = "block"
}

function thapaeModal() {
    var divTag = document.createElement("div")
    divTag.className = "expandedPane"
    expandedPane.style.display = "block"
}

function nycModal() {
    var divTag = document.createElement("div")
    divTag.className = "expandedPane"
    expandedPane.style.display = "block"
}

function flatironModal() {
    var divTag = document.createElement("div")
    divTag.className = "expandedPane"
    expandedPane.style.display = "block"
}

function cornellModal() {
    var divTag = document.createElement("div")
    divTag.className = "expandedPane"
    expandedPane.style.display = "block"
}