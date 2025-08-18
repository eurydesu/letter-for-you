let currentPage = 0;

function openFlipbook() {
    document.querySelector('.flipbook-wrapper').style.display = 'block';
    currentPage = 0; 
    const pages = document.querySelectorAll('.flipbook .page');
    pages.forEach(p => p.style.transform = 'rotateY(0deg)');
}

document.addEventListener('click', function(e) {
    const flipbook = document.querySelector('.flipbook-wrapper');
    if (e.target.closest('.flipbook')) {
        const pages = document.querySelectorAll('.flipbook .page');
        if (currentPage < pages.length) {
            pages[currentPage].style.transform = 'rotateY(-180deg)';
            currentPage++;
            if (currentPage === pages.length) {
                setTimeout(() => {
                    flipbook.style.display = 'none';
                }, 1000);
            }
        }
    }
});
if (currentPage < pages.length - 1) {   // flip only until page 7
    pages[currentPage].style.transform = 'rotateY(-180deg)';
    currentPage++;
} else {
    // on last click, just close instead of flipping last page
    flipbook.style.display = 'none';
}