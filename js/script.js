/* =========================
   MOBILE MENU
========================= */

function toggleMenu(){

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("show");
}

/* =========================
   FEEDBACK FORM VALIDATION
========================= */

function validateForm(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let comments = document.getElementById("comments").value;

    /* EMPTY FIELDS */

    if(name === "" || email === "" || comments === ""){

        alert("Please fill in all required fields.");

        return false;
    }

    /* EMAIL CHECK */

    if(!email.includes("@")){

        alert("Please enter a valid email address.");

        return false;
    }

    /* COMMENT LENGTH */

    if(comments.length < 10){

        alert("Comments are too short.");

        return false;
    }

    /* SUCCESS MESSAGE */

    alert("Thank you for your feedback!");

    return true;
}