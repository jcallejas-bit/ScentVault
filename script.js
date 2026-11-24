
// Get the form and collection elements
const fragranceForm = document.getElementById("fragrance-form");
const fragranceList = document.getElementById("fragrance-list");
const formMessage = document.getElementById("form-message");

// Retrieve previously saved fragrances from Local Storage
let fragrances = JSON.parse(localStorage.getItem("fragrances")) || [];

// Display all saved fragrances
function displayFragrances() {

    fragranceList.replaceChildren();

    // Check if the collection is empty
    if (fragrances.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No fragrances added yet.";

        fragranceList.appendChild(emptyMessage);
        return;
    }

    // Display each fragrance
    fragrances.forEach(function(fragrance) {

        const card = document.createElement("div");
        card.className = "fragrance-card";

        const title = document.createElement("h3");
        title.textContent = fragrance.name;

        const brand = document.createElement("p");
        brand.textContent = "Brand: " + fragrance.brand;

        const type = document.createElement("p");
        type.textContent = "Type: " + fragrance.type;

        const season = document.createElement("p");
        season.textContent = "Season: " + fragrance.season;

        const occasion = document.createElement("p");
        occasion.textContent = "Occasion: " + fragrance.occasion;

        card.appendChild(title);
        card.appendChild(brand);
        card.appendChild(type);
        card.appendChild(season);
        card.appendChild(occasion);

        fragranceList.appendChild(card);
    });
}

// Handle the form submission
fragranceForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the information entered by the user
    const name = document.getElementById("name").value.trim();
    const brand = document.getElementById("brand").value.trim();
    const type = document.getElementById("type").value;
    const season = document.getElementById("season").value;
    const occasion = document.getElementById("occasion").value;

    // Validate required information
    if (!name || !brand || !type || !season || !occasion) {
        formMessage.textContent = "Please complete all fields.";
        formMessage.style.color = "red";
        return;
    }

    // Create a new fragrance record
    const newFragrance = {
        name: name,
        brand: brand,
        type: type,
        season: season,
        occasion: occasion
    };

    // Add the fragrance to the collection
    fragrances.push(newFragrance);

    // Save the updated collection in Local Storage
    localStorage.setItem("fragrances", JSON.stringify(fragrances));

    // Display the updated collection
    displayFragrances();

    // Show a success message
    formMessage.textContent = "Fragrance saved successfully!";
    formMessage.style.color = "green";

    // Clear the form
    fragranceForm.reset();

});

// Display previously saved fragrances when the page opens
displayFragrances();
