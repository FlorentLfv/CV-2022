function scrollTopButton() {
    window.scrollTo(0, 0);
}

function scrollTopAccordion() {
    let formationScroll = document.getElementById("Accordion");
    formationScroll.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    })
}