
// JavaScript code for clinic search and reservation functionality

document.addEventListener("DOMContentLoaded", function() {
    const clinics = ["clinic1", "clinic2", "clinic3"];
    const searchInput = document.getElementById("clinic-search");
    const suggestionBox = document.getElementById("suggestions");
    const reservationForm = document.getElementById("reservation-form");
    const reservationDate = document.getElementById("reservation-date");

    searchInput.addEventListener("input", function() {
        const input = searchInput.value.toLowerCase();
        suggestionBox.innerHTML = "";
        if (input) {
            const filteredClinics = clinics.filter(clinic => clinic.toLowerCase().includes(input));
            filteredClinics.forEach(clinic => {
                const suggestionItem = document.createElement("div");
                suggestionItem.textContent = clinic;
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.addEventListener("click", function() {
                    searchInput.value = clinic;
                    suggestionBox.innerHTML = "";
                });
                suggestionBox.appendChild(suggestionItem);
            });
        }
    });

// الحاجة اللي يكتبوها ترسلها الى الايميل التالي : ba325005@gmail.com

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedClinic = searchInput.value;
        const selectedDate = reservationDate.value;
        if (clinics.includes(selectedClinic)) {
            alert(`Reservation made for ${selectedClinic} on ${selectedDate}`);
        } else {
            alert("Please select a valid clinic.");
        }

        src/js/scripts.js
        document.addEventListener("DOMContentLoaded", function() {
            const clinicInfo = document.getElementById("clinic-info");
        
            function fetchClinicInfo() {
                // Example API call to fetch clinic info
                fetch('https://api.example.com/clinics')
                    .then(response => response.json())
                    .then(data => {
                        data.forEach(clinic => {
                            const clinicElement = document.createElement("div");
                            clinicElement.innerHTML = `
                                <h2>${clinic.name}</h2>
                                <p>${clinic.description}</p>
                                <p>Address: ${clinic.address}</p>
                                <p>Contact: ${clinic.contact}</p>
                            `;
                            clinicInfo.appendChild(clinicElement);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching clinic info:', error);
                        clinicInfo.innerHTML = '<p>Error fetching clinic info.</p>';
                    });
            }
        
            fetchClinicInfo();
        });

    });
});