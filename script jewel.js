function showDetails(productName) {
    alert(
        productName +
        "\nWelcome to JewelJunction!\n" +
        "This is a sample jewellery showcase."
    );
}

// Search the jewellery collection
const searchBox = document.getElementById("searchBox");
const products = document.querySelectorAll(".product");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", function () {
    const searchText = searchBox.value.toLowerCase();
    let visibleCount = 0;

    products.forEach(function (product) {
        const name = product.dataset.name;
        const matches = name.includes(searchText);
        product.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;
});

// Contact form demonstration (does not send or save data)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value.trim();

    formMessage.textContent =
        "Thank you, " + customerName +
        "! Your sample enquiry has been recorded on this page.";

    contactForm.reset();
});
