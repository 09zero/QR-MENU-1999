const restaurant = {
    name: "HOTEL / RESTAURANT",
    whatsapp: "919074755317",
    googleReview: "https://g.page/r/CfQaa8MV5NOCEAI/review",
    instagram: "https://www.instagram.com/09zeroofficial/",
    facebook: "https://www.facebook.com/profile.php?id=61594573021229"
};


// PAGES

const welcomePage = document.getElementById("welcomePage");
const menuPage = document.getElementById("menuPage");
const feedbackPage = document.getElementById("feedbackPage");
const checkoutPage = document.getElementById("checkoutPage");


// BUTTONS

const menuButton = document.getElementById("menuButton");
const backButton = document.getElementById("backButton");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

const orderButton = document.getElementById("orderButton");

const feedbackButton =
    document.getElementById("feedbackButton");

const feedbackBackButton =
    document.getElementById("feedbackBackButton");

const cartBackButton =
    document.getElementById("cartBackButton");


// CART

let cart = [];


// FEEDBACK

let selectedRating = 0;

const feedbackName =
    document.getElementById("feedbackName");

const feedbackPhone =
    document.getElementById("feedbackPhone");

const feedbackMessage =
    document.getElementById("feedbackMessage");

const ratingButtons =
    document.querySelectorAll("#rating button");

const ratingText =
    document.getElementById("ratingText");


// CHECKOUT

const cartItems =
    document.getElementById("cartItems");

const customerName =
    document.getElementById("customerName");

const customerPhone =
    document.getElementById("customerPhone");

const tableNumber =
    document.getElementById("tableNumber");

const customerNote =
    document.getElementById("customerNote");

const subtotalElement =
    document.getElementById("subtotal");

const discountElement =
    document.getElementById("discount");

const grandTotalElement =
    document.getElementById("grandTotal");

const whatsappOrderButton =
    document.getElementById("whatsappOrderButton");


// MENU BUTTON

menuButton.addEventListener("click", function () {

    welcomePage.style.display = "none";
    feedbackPage.style.display = "none";
    checkoutPage.style.display = "none";
    menuPage.style.display = "block";

    window.scrollTo(0, 0);
});


// BACK BUTTON

backButton.addEventListener("click", function () {

    menuPage.style.display = "none";
    feedbackPage.style.display = "none";
    checkoutPage.style.display = "none";
    welcomePage.style.display = "flex";

    window.scrollTo(0, 0);
});


// WELCOME ORDER NOW

orderButton.addEventListener("click", function () {

    if (cart.length === 0) {

        welcomePage.style.display = "none";
        feedbackPage.style.display = "none";
        checkoutPage.style.display = "none";
        menuPage.style.display = "block";

        window.scrollTo(0, 0);

        return;
    }

    welcomePage.style.display = "none";
    feedbackPage.style.display = "none";
    menuPage.style.display = "none";
    checkoutPage.style.display = "block";

    updateCart();

    window.scrollTo(0, 0);
});


// ADD TO CART

document.querySelectorAll(".add-button").forEach(function (button) {

    button.addEventListener("click", function () {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingItem = cart.find(function (item) {
            return item.name === name;
        });

        if (existingItem) {

            existingItem.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCart();

        button.textContent = "Added ✓";

        setTimeout(function () {
            button.textContent = "ADD";
        }, 800);
    });
});


// UPDATE CART

function updateCart() {

    let totalQuantity = 0;

    cart.forEach(function (item) {
        totalQuantity += item.quantity;
    });

    cartCount.textContent = totalQuantity;

    renderCart();
}


// RENDER CART

function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        subtotalElement.textContent = "₹0";
        discountElement.textContent = "₹0";
        grandTotalElement.textContent = "₹0";

        return;
    }


    let subtotal = 0;


    cart.forEach(function (item, index) {

        const itemTotal =
            item.price * item.quantity;

        subtotal += itemTotal;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>₹${item.price} × ${item.quantity}</p>
            </div>

            <div class="quantity-controls">

                <button onclick="decreaseQuantity(${index})">
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

            </div>

            <strong>
                ₹${itemTotal}
            </strong>
        `;


        cartItems.appendChild(cartItem);
    });


    const discount = 0;
    const total = subtotal - discount;


    subtotalElement.textContent =
        `₹${subtotal}`;

    discountElement.textContent =
        `₹${discount}`;

    grandTotalElement.textContent =
        `₹${total}`;
}


// INCREASE QUANTITY

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// DECREASE QUANTITY

function decreaseQuantity(index) {

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}


// CART BUTTON

cartButton.addEventListener("click", function () {

    if (cart.length === 0) {

        alert("Please add an item first.");

        return;
    }


    welcomePage.style.display = "none";
    menuPage.style.display = "none";
    feedbackPage.style.display = "none";
    checkoutPage.style.display = "block";

    updateCart();

    window.scrollTo(0, 0);
});


// CART BACK TO MENU

cartBackButton.addEventListener("click", function () {

    checkoutPage.style.display = "none";
    menuPage.style.display = "block";

    window.scrollTo(0, 0);
});


// QUICK LINKS

document
    .getElementById("googleReviewButton")
    .addEventListener("click", function () {

        window.open(
            restaurant.googleReview,
            "_blank"
        );
    });


document
    .getElementById("instagramButton")
    .addEventListener("click", function () {

        window.open(
            restaurant.instagram,
            "_blank"
        );
    });


document
    .getElementById("facebookButton")
    .addEventListener("click", function () {

        window.open(
            restaurant.facebook,
            "_blank"
        );
    });


document
    .getElementById("whatsappButton")
    .addEventListener("click", function () {

        window.open(
            `https://wa.me/${restaurant.whatsapp}`,
            "_blank"
        );
    });


// FEEDBACK OPEN

feedbackButton.addEventListener("click", function () {

    welcomePage.style.display = "none";
    menuPage.style.display = "none";
    checkoutPage.style.display = "none";
    feedbackPage.style.display = "block";

    window.scrollTo(0, 0);
});


// FEEDBACK BACK

feedbackBackButton.addEventListener("click", function () {

    feedbackPage.style.display = "none";
    welcomePage.style.display = "flex";

    window.scrollTo(0, 0);
});


// STAR RATING

ratingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        selectedRating =
            Number(button.dataset.rating);


        ratingButtons.forEach(function (star) {

            const starRating =
                Number(star.dataset.rating);


            if (starRating <= selectedRating) {

                star.classList.add("active");

            } else {

                star.classList.remove("active");
            }
        });


        ratingText.textContent =
            `${selectedRating} / 5 — Thank you!`;
    });
});


// SUBMIT FEEDBACK

document
    .getElementById("submitFeedbackButton")
    .addEventListener("click", function () {

        const name =
            feedbackName.value.trim();

        const phone =
            feedbackPhone.value.trim();

        const message =
            feedbackMessage.value.trim();


        if (name === "") {

            alert("Please enter your name.");

            feedbackName.focus();

            return;
        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            feedbackPhone.focus();

            return;
        }


        if (selectedRating === 0) {

            alert(
                "Please select your rating."
            );

            return;
        }


        if (message === "") {

            alert(
                "Please enter your feedback."
            );

            feedbackMessage.focus();

            return;
        }


        const whatsappMessage =
`CUSTOMER FEEDBACK

Restaurant: ${restaurant.name}

Name: ${name}
Mobile: ${phone}

Rating: ${selectedRating}/5

Feedback:
${message}

Thank you!`;


        const whatsappURL =
            `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(
            whatsappURL,
            "_blank"
        );
    });


// CATEGORY FILTER

document
    .querySelectorAll(".category")
    .forEach(function (categoryButton) {

        categoryButton.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".category")
                    .forEach(function (button) {

                        button.classList.remove("active");
                    });


                categoryButton.classList.add("active");


                const selectedCategory =
                    categoryButton.dataset.category;


                document
                    .querySelectorAll(".food-card")
                    .forEach(function (card) {

                        const cardCategory =
                            card.dataset.category;


                        if (
                            selectedCategory === "all" ||
                            cardCategory === selectedCategory
                        ) {

                            card.style.display = "flex";

                        } else {

                            card.style.display = "none";
                        }
                    });
            }
        );
    });


// WHATSAPP ORDER

whatsappOrderButton.addEventListener(
    "click",
    function () {

        const name =
            customerName.value.trim();

        const phone =
            customerPhone.value.trim();

        const table =
            tableNumber.value.trim();

        const note =
            customerNote.value.trim();


        if (name === "") {

            alert(
                "Please enter customer name."
            );

            customerName.focus();

            return;
        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            customerPhone.focus();

            return;
        }


        if (table === "") {

            alert(
                "Please enter Table No. / Room No."
            );

            tableNumber.focus();

            return;
        }


        if (cart.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;
        }


        let subtotal = 0;

        let itemsMessage = "";


        cart.forEach(function (item) {

            const itemTotal =
                item.price * item.quantity;

            subtotal += itemTotal;


            itemsMessage +=
                `${item.name} × ${item.quantity} = ₹${itemTotal}\n`;
        });


        const discount = 0;

        const total =
            subtotal - discount;


        let message =
`NEW ORDER

Restaurant: ${restaurant.name}

Customer: ${name}
Mobile: ${phone}
Table / Room No: ${table}

ITEMS
${itemsMessage}
Subtotal: ₹${subtotal}
Discount: ₹${discount}
TOTAL: ₹${total}`;


        if (note !== "") {

            message +=
                `\n\nSpecial Note: ${note}`;
        }


        message +=
            `\n\nThank you!`;


        const whatsappURL =
            `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );
    }
);