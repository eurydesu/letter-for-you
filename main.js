let currentPage = 0;

function openFlipbook() {
    document.querySelector('.flipbook').style.display = 'block';
    currentPage = 0; // reset if reopening
    const pages = document.querySelectorAll('.flipbook .page');
    pages.forEach(p => p.style.transform = 'rotateY(0deg)'); // reset pages
}

document.addEventListener('click', function(e) {
    const flipbook = document.querySelector('.flipbook');
    if (e.target.closest('.flipbook')) {
        const pages = document.querySelectorAll('.flipbook .page');
        if (currentPage < pages.length) {
            pages[currentPage].style.transform = 'rotateY(-180deg)';
            currentPage++;
            if (currentPage === pages.length) {
                // Automatically hide after last page
                setTimeout(() => {
                    flipbook.style.display = 'none';
                }, 1000); // wait for last flip animation
            }
        }
    }
});