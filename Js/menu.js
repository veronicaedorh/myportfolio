const menuBtn = document.getElementById("ham");
const ul = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    const dropDown = document.querySelector(".primary");

    if (!dropDown.classList.contains("open")) {
        dropDown.classList.add("open");
        menuBtn.textContent = "X";
        setTimeout(function() {
            ul.classList.remove("visuallyhidden");
        }, 20);
    } else {
        menuBtn.innerHTML = "&#9776;";
        ul.classList.add("visuallyhidden");
        ul.addEventListener(
            "transitioned",
            function(e) {
                dropDown.classList.remove("open");
            }, {
                capture: false,
                once: true,
                passive: false,
            }
        );
    }
});

// set active

function active() {
    switch (document.title) {
        case "My Portfolio - Home":
            document.querySelector("#home").classList.add("active");
            break;

        case "My Portfolio - Design":
            document.querySelector("#design").classList.add("active");
            break;

        case "My Portfolio - Research":
            document.querySelector("#research").classList.add("active");
            break;

        case "My Portfolio - About":
            document.querySelector("#about").classList.add("active");
            break;
    }
}

active();