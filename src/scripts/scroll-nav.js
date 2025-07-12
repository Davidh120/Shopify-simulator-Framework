document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('header');

    /**
     * Handles scroll event by adding or removing 'bg-nav' class from #header depending on scroll position, to add a blurred background
     */
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