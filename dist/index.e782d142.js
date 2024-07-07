document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader-container");
    const content = document.querySelector(".content");
    loader.addEventListener("animationend", function() {
        document.body.classList.remove("no-scroll-preload");
        document.body.style.overflow = "visible"; // Set overflow to visible
        loader.style.display = "none";
        content.classList.add("visible"); // Fade in the content
    });
});

//# sourceMappingURL=index.e782d142.js.map
