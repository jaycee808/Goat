/* Event Listener to toggle navigation menu */ 
document.addEventListener('DOMContentLoaded', function () {
    const cartToggle = document.querySelector('.toggle-cart');
    const cartOverlay = document.querySelector('.cart-overlay');

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
        category: "cleansers",
        products: [
            {
                id: "c1",
                name: "wildwood",
                price: "12",
                description: "This refreshing blend delicately removes impurities while nourishing your skin. Infused with botanical extracts like aloe-vera, green tea, and chamomile, Wildwood provides a gentle and soothing cleanse, leaving your skin feeling revitalised and balanced.",
                image: "./assets/images/wildwood-cleanser.jpg",
            },
            {
                id: "c2",
                name: "forest dew",
                price: "15",
                description: "Crafted from the purest botanical extracts this revitalising formula combines the essence of crisp morning air and fragrant wildflowers. Forest Dew features a blend of tea tree oil, witch hazel, and cucumber extract, which help to purify your skin.",
                image: "./assets/images/forest-dew-cleanser.jpg",
            },
            {
                id: "c3",
                name: "oasis",
                price: "18",
                description: "Oasis is a hydrating elixir that delivers your skin in a wave of soothing moisture. Infused with nourishing ingredients like rose water, hyaluronic acid, and cucumber, it gently removes impurities while replenishing hydration.",
                image: "./assets/images/oasis-cleanser.jpg",
            },
        ],
    },
    {
        category: "exfoliators",
        products: [
            {
            id: "e1",
            name: "oakwood",
            price: "10",
            description: "This luxurious blend draws inspiration from the sturdy oak tree, renowned for its resilience and regenerative properties. Oakwood combines finely ground walnut shells, oatmeal, and aloe-vera, providing a gentle yet effective exfoliation that clears away dead skin cells and impurities.",
            image: "./assets/images/oakwood-exfoliator.jpg",
            },
            {
            id: "e2",
            name: "cedar bark",
            price: "12",
            description: "Inspired by cedar trees, this invigorating blend harnesses the purifying benefits of natural cedar bark extract and bamboo charcoal. The gentle exfoliating particles in Cedar Bark help to unclog pores, remove excess oil, and gently polish away dullness, leaving your skin looking fresh and revitalised.",
            image: "./assets/images/cedar-bark-exfoliator.jpg",
            },
            {
            id: "e3",
            name: "wildflowers",
            price: "14",
            description: "This enchanting blend captures the essence of vibrant meadows. With a blend of flower extracts, such as chamomile, lavender, and rose petals, this exfoliator provides a pampering experience that gently buffs away dead skin cells, revealing a soft and radiant complexion.",
            image: "./assets/images/wildflowers-exfoliator.jpg",
        },
        ],
    },
    {
        category: "moisturisers",
        products: [
            {
            id: "m1",
            name: "golden oak",
            price: "20",
            description: "Formulated with potent antioxidants, such as vitamin E and grapeseed oil, this moisturiser helps to replenish moisture and protect against environmental stressors. Golden Oak deeply hydrates leaving your skin feeling supple and revitalised.",
            image: "./assets/images/golden-oak-moisturiser.jpg",
            },
            {
            id: "m2",
            name: "amber nectar",
            price: "25",
            description: "This luxurious formula features a blend of ingredients, including shea butter, jojoba oil, and honey extract, which deeply hydrate and lock in moisture.",
            image: "./assets/images/amber-nectar-moisturiser.jpg",
            },
            {
            id: "m3",
            name: "aqua luxe",
            price: "30",
            description: "This lightweight formula is infused with hyaluronic acid, seaweed extract, and aloe vera. This moisturiser is oil-free and suitable for oily skin types, it absorbs quickly, leaving you with a rejuvenated appearance.",
            image: "./assets/images/aqua-luxe-moisturiser.jpg",
            },
        ],
    },
    {
        category: "fragrances",
        products: [
            {
            id: "f1",
            name: "amber oak",
            price: "50",
            description: "Amber Oak captures the essence of rugged wilderness. The top note unveils a burst of bergamot, followed by a rich burst of earthy sandalwood with hints of geranium. Finally, the base note lingers with the warm embrace of amber and oakwood. ",
            image: "./assets/images/amber-oak-fragrance.jpg",
            },
            {
            id: "f2",
            name: "vanilla luxe",
            price: "55",
            description: "Vanilla Luxe is a timeless fragrance, it is a blend of warm and sensual notes. The top note opens with the sweet aroma of vanilla, complemented by an invigorating burst of bergamot. As the scent unfolds, the mid note reveals a subtle touch of leather. Finally, the base note unveils the woody scent of cedarwood. ",
            image: "./assets/images/vanilla-luxe-fragrance.jpg",
            },
            {
            id: "f3",
            name: "wildfire",
            price: "50",
            description: "Wildfire is a bold and powerful fragrance that makes a statement with its fiery blend of spices, tobacco, and wood. The top note ignites with the spicy warmth of cinnamon and black pepper, leading to a heart of smoky tobacco. Finally, the base note reveals a rich and aromatic fusion of sandalwood, cedarwood, and amber. ",
            image: "./assets/images/wildfire-fragrance.jpg",
            },
            {
            id: "f4",
            name: "redwood dusk",
            price: "55",
            description: "Redwood Dusk is a sophisticated and earthy fragrance that brings to life the aromatic richness of the wilderness. The top note evokes the freshness of bergamot, while the heart reveals the soothing aroma of lavender. Finally, the base note develops a warm fusion of redwood and cedarwood.",
            image: "./assets/images/redwood-dusk-fragrance-two.jpg",
            },
            {
            id: "f5",
            name: "forest noir",
            price: "60",
            description: "Forest Noir embodies the mysterious allure of a dense woodland. The top note reveals the freshness of juniper berries, followed by a heart of earthy patchouli. Finally, the base note is a seductive blend of leather, vetiver, and sandalwood.",
            image: "./assets/images/forest-noir-fragrance.jpg",
            },
            {
            id: "f6",
            name: "midnight velvet",
            price: "60",
            description: "Midnight Velvet is a luxurious fragrance that captivates with its blend of floral, vanilla, and wood. The top note opens with the freshness of bergamot, while the heart reveals the velvety essence of iris. Finally, the base note reveals a sensuous blend of warm vanilla and woody notes.",
            image: "./assets/images/midnight-velvet-fragrance.jpg",
            },
        ],
    },
];

displayShoppingCart();
calculateTotalPrice();

// Function to display products dynamically
function displayProducts() {
    const productDisplayDiv = document.getElementById('product-display');

    let productHTML = '';
        for (let i = 0; i < productList.length; i++) {
        
        const category = productList[i];

    productHTML += `<h2 class="product-category">${category.category.toUpperCase()}</h2>`;
        for (let p = 0; p < category.products.length; p++) {
        
        const product = category.products[p];
    
    productHTML += `
        <div class="product-display">
            <div class="column">
            <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="column">
            <h3 class="product-title">${product.name.toUpperCase()}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">Price: £${product.price}</p>
            <button class="addToBasketBtn" data-id="${product.id}">Add to Basket</button>
            </div>
        </div>
        `;
    }
}

    productDisplayDiv.innerHTML = productHTML;

    // add event listeners to the "Add to Basket" buttons
    const addToBasketBtns = document.getElementsByClassName('addToBasketBtn');

    for (let i = 0; i < addToBasketBtns.length; i++) {
        addToBasketBtns[i].addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            addToBasket(productId);
    
            // Create a new HTML element to display 'Added to basket'
            const addedToBasketElement = document.createElement('div');
            addedToBasketElement.textContent = 'Added to basket';
            addedToBasketElement.className = 'addedToBasket';
            this.parentNode.appendChild(addedToBasketElement);
    
            // Remove the 'Added to basket' message after a delay
            setTimeout(function () {
                addedToBasketElement.remove();
            }, 1500);
        });
    }
    
}

// Function to add product to the basket
function addToBasket(productId) {
    // get the product details based on the productId
    let product;
    for (let i = 0; i < productList.length; i++) {
        for (let p = 0; p < productList[i].products.length; p++) {
            if (productList[i].products[p].id === productId) {
                product = productList[i].products[p];
                break;
            }
        }
        if (product) {
            break;
        }
    }

    // get the basket items from the local storage
    let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

    // check if the product is already in the basket
    const existingItem = basketItems.find((item) => item.id === productId);
    if (existingItem) {
      // if the product already exists in the basket, increase the quantity
        existingItem.quantity++;
    } else {
      // if the product does not exist in the basket, add it
        basketItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        });
    }

    // Update the basket items in the local storage
    localStorage.setItem('basketItems', JSON.stringify(basketItems));

    // Refresh the shopping cart
    displayShoppingCart();

    // Update the total price of the items in the shopping cart
    updateTotalPrice();
}

// Function to display the items in the shopping cart
function displayShoppingCart() {
    const cartItemsDiv = document.querySelector('.cart-items');

    // retrieve the basket items from local storage
    let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

    let cartItemsHTML = '';
    for (let i = 0; i < basketItems.length; i++) {
        const item = basketItems[i];

        // Find the category and product based on the item's ID
        let category, product;
        for (let c = 0; c < productList.length; c++) {
            const currentCategory = productList[c];
            const foundProduct = currentCategory.products.find(p => p.id === item.id);
            if (foundProduct) {
                category = currentCategory;
                product = foundProduct;
                break;
            }
        }

        // display the items information in html
        cartItemsHTML += `
            <article class="cart-item" data-id="${item.id}">
                <div>
                    <h4 class="cart-item-name">${item.name.toUpperCase()}</h4>
                    <h3 class="cart-item-category">${category.category.toUpperCase().slice(0,-1)}</h3>
                    <p class="cart-item-price">£${item.price}</p>
                    
                </div>
                <div class="cart-buttons">
                    <button class="cart-item-increase-btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <p class="cart-item-amount">${item.quantity}</p>
                    <button class="cart-item-decrease-btn">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <button class="cart-item-remove-btn">Remove</button>
                </div>
            </article>
        `;
    }

    cartItemsDiv.innerHTML = cartItemsHTML;

    // add event listeners to the remove buttons
    const removeButtons = document.getElementsByClassName('cart-item-remove-btn');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function () {
            const itemId = this.parentNode.parentNode.getAttribute('data-id');
            removeCartItem(itemId);
        });
    }

    // add event listeners to the increase and decrease buttons
    const increaseButtons = document.getElementsByClassName('cart-item-increase-btn');
    const decreaseButtons = document.getElementsByClassName('cart-item-decrease-btn');

    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', function () {
            const productId = this.closest('.cart-item').getAttribute('data-id');
            increaseQuantity(productId);
        });
    }

    for (let i = 0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', function () {
            const productId = this.closest('.cart-item').getAttribute('data-id');
            decreaseQuantity(productId);
        });
    }
}


// Function to remove product from the basket
function removeCartItem(itemId) {
    // get the basket items from the local storage
    let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

    // find the index of the item to remove
    const itemIndex = basketItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
        // remove the item from the basket items array
        basketItems.splice(itemIndex, 1);

        // update the basket items in the local storage
        localStorage.setItem('basketItems', JSON.stringify(basketItems));

        // refresh the shopping cart
        displayShoppingCart();
        
        // update the price of the shopping cart when an item is removed
        updateTotalPrice();
    }
}

// Function to increase quantity of an item in the shopping cart
function increaseQuantity(productId) {
    let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    let updatedBasketItems = [];

    for (let i = 0; i < basketItems.length; i++) {
        const item = basketItems[i];

        if (item.id === productId) {
            item.quantity++;
        }

        updatedBasketItems.push(item);
    }

    localStorage.setItem('basketItems', JSON.stringify(updatedBasketItems));
    displayShoppingCart();
    updateTotalPrice();
}

// Function to decrease quantity of an item in the shopping cart
function decreaseQuantity(productId) {
    let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    let updatedBasketItems = [];

    for (let i = 0; i < basketItems.length; i++) {
        const item = basketItems[i];

        if (item.id === productId) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                continue;
            }
        }
        updatedBasketItems.push(item);
    }

    localStorage.setItem('basketItems', JSON.stringify(updatedBasketItems));
    displayShoppingCart();
    updateTotalPrice();
}

// Function to calculate total price of the basket
function calculateTotalPrice() {
    const cartItems = document.getElementsByClassName('cart-item');
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.querySelector('.cart-item-price');
        const price = parseFloat(priceElement.innerText.replace('£', ''));
        const quantityElement = cartItem.querySelector('.cart-item-amount');
        const quantity = parseInt(quantityElement.innerText);
        totalPrice += price * quantity;
    }

    return totalPrice;
}

// Function to update the total price in the shopping cart
function updateTotalPrice() {
    const cartTotalElement = document.querySelector('.cart-total');
    const totalPrice = calculateTotalPrice();
    cartTotalElement.innerText = `Total: £${totalPrice.toFixed(2)}`;
}

updateTotalPrice();
displayProducts();
