

// Website Loaded Message
console.log("Arawaza website loaded successfully!");

// Welcome Message
window.onload = function () {

    alert("Welcome to Arawaza Martial Arts Equipment!");

};

// Button Hover Animation
const buttons = document.querySelectorAll("button, .product-btn");

buttons.forEach(function(button){

    button.addEventListener("mouseover", function(){

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseout", function(){

        button.style.transform = "scale(1)";

    });

});

// Product Card Hover Effect
const cards = document.querySelectorAll(".product-card");

cards.forEach(function(card){

    card.addEventListener("mouseover", function(){

        card.style.boxShadow =
        "0 10px 20px rgba(0,0,0,0.3)";

    });

    card.addEventListener("mouseout", function(){

        card.style.boxShadow =
        "0 4px 10px rgba(0,0,0,0.1)";

    });

});