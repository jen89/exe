import 'owl.carousel2';

(() => {
    $('.carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: [],
        navClass: ['clients__prev', 'clients__next'],
        items: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            780: {
                items: 4
            },
            960: {
                items: 5
            }
        }
    })

})();
