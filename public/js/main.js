window.addEventListener('load', () => {
    const toggleBtn = document.getElementById('btn-hamburguer');
    const ulNav = document.querySelector('.ul-nav');
    toggleBtn.addEventListener('click', () => {
        ulNav.classList.toggle('active');
    })
})