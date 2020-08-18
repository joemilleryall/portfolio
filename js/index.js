const pane = document.getElementsByClassName('pane');
const expandedPane = document.querySelector('.expandedPane');
const bio = document.querySelector('#bio')

bio.addEventListener('mouseover', e => {
    if(e.target.id == "2006"){
        expandedPane.style.display = "block"
    }
})

expandedPane.addEventListener('mouseleave', e => {
    expandedPane.style.display = "none"
})