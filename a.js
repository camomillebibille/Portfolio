const images = document.querySelectorAll("div.container")
const taille = images.length
var i = 0 
var z = 1

function suivant(){
    images[i].classList.remove('active_gauche')
    images[i].classList.remove('active_droite')
    if (i<(taille-1)){
        i++
    }
    else{
        i=0
    }
    z++
    images[i].style.zIndex = z
    images[i].classList.add('active')
    images[i].classList.add('active_droite')
}

function precedent(){
    images[i].classList.remove('active_gauche')
    images[i].classList.remove('active_droite')
    if (i>0){
        i--
    }
    else{
        i= taille-1
    }
    z++
    images[i].style.zIndex = z
    images[i].classList.add('active')
    images[i].classList.add('active_gauche')
}

const elt = document.querySelector('.foot')

function footer(){
    elt.classList.remove("declanche")
    elt.classList.add("enclanche")
}

function defooter(){
    elt.classList.remove("enclanche")
    elt.classList.add("declanche")
}