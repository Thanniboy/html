const hambergerButton = document.getElementById('hamburger')
const navList = document .getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hambergerButton.addEventListener('click', toggleButton);