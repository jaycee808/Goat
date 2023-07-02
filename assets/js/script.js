/* Event Listener to toggle navigation menu */ 
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    const menuCloseBtn = document.querySelector('.menu-close-btn');
    const cartToggle = document.querySelector('.toggle-cart');
    const cartOverlay = document.querySelector('.cart-overlay');

    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
        menuLinks.classList.toggle('grid');
        menuCloseBtn.style.display = 'block'; // Display the close button when menu links are shown
    });

    menuCloseBtn.addEventListener('click', () => {
        menuLinks.classList.remove('show');
        menuCloseBtn.style.display = 'none'; // Hide the close button when menu links are hidden
    });

    cartToggle.addEventListener('click', () => {
        cartOverlay.classList.toggle('show');
    });

    const cartCloseBtn = document.querySelector('.cart-close-btn');
    cartCloseBtn.addEventListener('click', () => {
        cartOverlay.classList.remove('show');
    });
});

// product lists //
let productList = [
    {
        id: "c1",
        name: "cleanser one",
        price: "12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed odio morbi quis commodo odio. Gravida in fermentum et sollicitudin ac. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Tempor nec feugiat nisl pretium fusce.",
    },
    {
        id: "c2",
        name: "cleanser two",
        price: "15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Placerat vestibulum lectus mauris ultrices. Fermentum leo vel orci porta non pulvinar neque. ",
    },
    {
        id: "c3",
        name: "cleanser three",
        price: "18",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna porttitor. Dui accumsan sit amet nulla facilisi morbi tempus. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Pulvinar neque laoreet suspendisse interdum consectetur libero id. ",
    },
    {
        id: "e1",
        name: "exfoliator one",
        price: "10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "e2",
        name: "exfoliator two",
        price: "12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "e3",
        name: "exfoliator three",
        price: "14",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "m1",
        name: "moisturiser one",
        price: "20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "m2",
        name: "moisturiser two",
        price: "25",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "m3",
        name: "moisturiser three",
        price: "30",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "b1",
        name: "beard oil one",
        price: "12",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "b2",
        name: "beard oil two",
        price: "10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "b3",
        name: "beard oil three",
        price: "14",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "f1",
        name: "cologne one",
        price: "50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "f2",
        name: "cologne two",
        price: "55",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "f3",
        name: "cologne three",
        price: "50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "f4",
        name: "cologne four",
        price: "55",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: "f5",
        name: "cologne five",
        price: "60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

// Function to display products dynamically
function displayProducts() {
    const productDisplayDiv = document.getElementById('product-display');

    let productHTML = '';
        for (let i = 0; i < productList.length; i++) {
        const product = productList[i];

        productHTML += `
            <div>
                <h3>${product.name}</h3>
                <p>Price: £${product.price}</p>
                <p>Description: ${product.description}</p>
                <button class="addToBasketBtn" data-id="${product.id}">Add to Basket</button>
            </div>
            `;
        }

        productDisplayDiv.innerHTML = productHTML;
    }

displayProducts();