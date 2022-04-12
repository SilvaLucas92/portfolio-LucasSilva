window.addEventListener('load', () => {
    const toggleBtn = document.getElementById('btn-hamburguer');
    const ulNav = document.querySelector('.ul-nav');
    
    const aNav = document.querySelectorAll('.nav-a')
    toggleBtn.addEventListener('click', () => {
        ulNav.classList.toggle('active');
    });
    aNav.forEach(btn => {
        btn.addEventListener('click', () => {
            ulNav.classList.remove('active');
        })
    }); 
})