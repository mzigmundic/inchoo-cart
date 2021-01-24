// Get Elements from DOM
const cartBtnIcon = document.getElementById("cart-btn-icon");
const cartBox = document.getElementById("cart-box");
const numOfItemsSpan = document.getElementById("num-of-items");
const cartBoxControlPrev = document.getElementById("cart-box-control-previous");
const cartBoxControlNext = document.getElementById("cart-box-control-next");
const cartItems = Array.from(document.querySelectorAll(".cart-item"));

// Initialize index globally for handling arrow buttons
let index = 0;

// Number of Items in Cart or empty
cartItems.length > 1
	? (numOfItemsSpan.innerText = `${cartItems.length} items`)
	: cartItems.length === 1
	? (numOfItemsSpan.innerText = `${cartItems.length} item`)
	: (numOfItemsSpan.innerText = `empty`);

// Show / Hide Cart Box
cartBtnIcon.addEventListener("click", () => {
	cartBox.classList.toggle("show-cart-box");
});

// Hide Cart Box when clicked outside of it
document.addEventListener("click", (e) => {
	if (!cartBox.contains(e.target) && !cartBtnIcon.contains(e.target)) {
		cartBox.classList.remove("show-cart-box");
	}
});

// Handle Up Arrow Button
cartBoxControlPrev.addEventListener("click", () => {
	if (index > 0) {
		cartItems[index + 2].classList.remove("show-cart-item");
		cartItems[index - 1].classList.add("show-cart-item");
		cartBoxControlNext.classList.remove("control-disabled");
		index--;
		if (index === 0) {
			cartBoxControlPrev.classList.add("control-disabled");
		}
	}
});

// Handle Down Arrow Button
cartBoxControlNext.addEventListener("click", () => {
	if (index < cartItems.length - 3) {
		cartItems[index].classList.remove("show-cart-item");
		cartItems[index + 3].classList.add("show-cart-item");
		cartBoxControlPrev.classList.remove("control-disabled");
		index++;
		if (index === cartItems.length - 3) {
			cartBoxControlNext.classList.add("control-disabled");
		}
	}
});
