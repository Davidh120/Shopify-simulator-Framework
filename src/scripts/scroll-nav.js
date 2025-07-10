document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 0) {
            nav.classList.add('bg-nav');
        } else {
            nav.classList.remove('bg-nav');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});