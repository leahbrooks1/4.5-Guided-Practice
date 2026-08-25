/*
    Author:
    Date:
    Purpose:
*/

/* =========================================
    PRODUCT DATA
========================================= */

// STEP 3
const defaultProducts = [{
		id: 1,
		name: "Aurora Vase",
		price: 95,
		stock: 4,
		image: "images/AuroraVase.png",
		description: "Hand-blown glass vase with swirling aurora colors."
	},
	{
		id: 2,
		name: "Ember Bowl",
		price: 75,
		stock: 3,
		image: "images/EmberBowl.png",
		description: "Decorative fire-inspired centerpiece bowl."
	},
	{
		id: 3,
		name: "Crystal Wave",
		price: 120,
		stock: 2,
		image: "images/CrystalWave.png",
		description: "Ocean-inspired sculpture with flowing glass curves."
	},
	{
		id: 4,
		name: "Solar Lantern",
		price: 60,
		stock: 5,
		image: "images/SolarLantern.png",
		description: "Handcrafted lantern with warm glowing tones."
	},
	{
		id: 5,
		name: "Frost Pendant",
		price: 45,
		stock: 1,
		image: "images/FrostPendant.png",
		description: "Elegant frozen-glass pendant artwork."
	},
	{
		id: 6,
		name: "Nebula Orb",
		price: 140,
		stock: 0,
		image: "images/NebulaOrb.png",
		description: "Galaxy-inspired decorative glass orb."
	},
	
{
    id: 7,
    name: "Rose Glass Vase",
    price: 85,
    stock: 4,
    image: "images/RoseGlassVase.png",
    description: "Hand-blown rose-colored glass vase with an elegant finish."
},
{
    id: 8,
    name: "Ocean Glass Bowl",
    price: 70,
    stock: 3,
    image: "images/OceanGlassBowl.png",
    description: "Decorative blue glass bowl inspired by ocean waves."
},
{
    id: 9,
    name: "Sunset Glass Orb",
    price: 110,
    stock: 2,
    image: "images/SunsetGlassOrb.png",
    description: "Handcrafted glass orb featuring warm sunset-inspired colors."
}
];

/* =========================================
    LOCAL STORAGE SETUP
========================================= */

// STEP 4

/* =========================================
    DOM REFERENCES
========================================= */

const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");
const countdown = document.getElementById("countdown");
const notification = document.getElementById("notification");
const cartButton = document.getElementById("cart-button");

/* =========================================
    CART NAVIGATION (NEW PAGE)
========================================= */

// STEP 5


/* =========================================
     CREATE TOOLTIP ELEMENT
========================================= */

// STEP 6


/* =========================================
     DISPLAY PRODUCTS
========================================= */

// STEP 7


/* =========================================
    ADD TO CART
========================================= */

// STEP 8


/* =========================================
    UPDATE CART COUNT
========================================= */
function displayCart() {
	cartCount.textContent = cart.length;
}

/* =========================================
    SAVE DATA
========================================= */

// STEP 9


/* =========================================
    NOTIFICATION
========================================= */
function showNotification() {
	notification.classList.add("show");
	setTimeout(() => notification.classList.remove("show"), 1500);
}

/* =========================================
    TIMER LOGIC
========================================= */

// STEP 10


/* =========================================
    CLEAR CART
========================================= */

// STEP 11


/* =========================================
    INITIALIZATION
========================================= */
displayProducts();
displayCart();
// Update countdown every second
setInterval(updateTimer, 1000);