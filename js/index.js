// To make scroll bar hide on scroll down and make it appear on scroll up
let prevScrollpos = window.pageYOffset
const navbar = document.getElementById("navbar")
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0"
    } else {
        navbar.style.top = "-100px"
    }
    prevScrollpos = currentScrollPos
}

// gallery show more and less
const galleryShowMoreBtn = document.getElementById('galleryShowMoreBtn')
const galleryShowMoreText = document.getElementById('galleryShowMoreText')
galleryShowMoreBtn.addEventListener('click',()=>{
    if(galleryShowMoreText.innerText == 'SHOW MORE'){
        galleryShowMoreText.innerText = 'SHOW LESS'
        galleryShowMoreBtn.classList.add('active')
    }
    else{
        galleryShowMoreText.innerText = 'SHOW MORE'
        galleryShowMoreBtn.classList.remove('active')
    }
})