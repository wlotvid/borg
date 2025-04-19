document.addEventListener("DOMContentLoaded", function() {
    const wilayaSelect = document.getElementById("wilaya");
    const citySelect = document.getElementById("city");
    const clinicInput = document.getElementById("clinic-name");
    const personInput = document.getElementById("person-name");
    const reservationDateInput = document.getElementById("reservation-date");
    const reservationForm = document.getElementById("reservation-form");
    const suggestionBox = document.getElementById("suggestions");
    const supportButton = document.getElementById("support-button");
    const languageButton = document.getElementById("language-button");

    const wilayas = [
        "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira",
        "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers", "Djelfa", "Jijel", "Sétif", "Saïda",
        "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara",
        "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt",
        "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa",
        "Relizane"
    ];

    const cities = {
        "Adrar": ["Adrar", "Reggane", "Timimoun", "Aoulef", "Zaouiat Kounta"],
        "Chlef": ["Chlef", "Ténès", "Ouled Fares", "Boukadir", "El Karimia"],
        "Laghouat": ["Laghouat", "Aflou", "Hassi R'Mel", "Ksar El Hirane", "Sidi Makhlouf"],
        "Oum El Bouaghi": ["Oum El Bouaghi", "Aïn Beïda", "Aïn M'lila", "Ksar Sbahi", "F'kirina"],
        "Batna": ["Batna", "Barika", "Merouana", "N'Gaous", "Tazoult"],
        "Béjaïa": ["Béjaïa", "Akbou", "Amizour", "Tichy", "El Kseur"],
        "Biskra": ["Biskra", "Tolga", "Ouled Djellal", "El Kantara", "Sidi Khaled"],
        "Béchar": ["Béchar", "Kenadsa", "Abadla", "Taghit", "Igli"],
        "Blida": ["Blida", "Boufarik", "El Affroun", "Mouzaïa", "Ouled Yaïch"],
        "Bouira": ["Bouira", "Sour El Ghozlane", "Lakhdaria", "Haizer", "Aïn Bessem"],
        "Tamanrasset": ["Tamanrasset", "In Salah", "In Guezzam", "Tazrouk", "Abalessa"],
        "Tébessa": ["Tébessa", "Bir El Ater", "Cheria", "El Kouif", "Ouenza"],
        "Tlemcen": ["Tlemcen", "Maghnia", "Ghazaouet", "Remchi", "Sebdou"],
        "Tiaret": ["Tiaret", "Frenda", "Sougueur", "Mahdia", "Meghila"],
        "Tizi Ouzou": ["Tizi Ouzou", "Azazga", "Draa Ben Khedda", "Larbaâ Nath Irathen", "Boghni"],
        "Algiers": ["Algiers", "Bab El Oued", "El Harrach", "Hussein Dey", "Rouiba"],
        "Djelfa": ["Djelfa", "Aïn Oussera", "Hassi Bahbah", "Messaad", "Dar Chioukh"],
        "Jijel": ["Jijel", "Taher", "El Milia", "Chekfa", "Sidi Abdelaziz"],
        "Sétif": ["Sétif", "El Eulma", "Aïn Oulmene", "Bougaa", "Beni Ourtilane"],
        "Saïda": ["Saïda", "Aïn El Hadjar", "Youb", "Ouled Brahim", "Sidi Boubekeur"],
        "Skikda": ["Skikda", "El Harrouch", "Azzaba", "Tamalous", "Collo"],
        "Sidi Bel Abbès": ["Sidi Bel Abbès", "Télagh", "Ben Badis", "Sfisef", "Merine"],
        "Annaba": ["Annaba", "El Hadjar", "Berrahal", "Aïn Berda", "El Bouni"],
        "Guelma": ["Guelma", "Bouati Mahmoud", "Bouhamdane", "Héliopolis", "Oued Zenati"],
        "Constantine": ["Constantine", "El Khroub", "Aïn Smara", "Hamma Bouziane", "Didouche Mourad"],
        "Médéa": ["Médéa", "Berrouaghia", "Ksar El Boukhari", "El Omaria", "Chahbounia"],
        "Mostaganem": ["Mostaganem", "Aïn Nouïssy", "Achaacha", "Bouguirat", "Hassi Mamèche"],
        "M'Sila": ["M'Sila", "Bousaada", "Aïn El Hadjel", "Aïn Fares", "Khoubana"],
        "Mascara": ["Mascara", "Ghriss", "Sig", "Tighennif", "Bouhanifia"],
        "Ouargla": ["Ouargla", "Touggourt", "Hassi Messaoud", "El Hadjira", "Sidi Khouiled"],
        "Oran": ["Oran", "Es Senia", "Arzew", "Gdyel", "Bir El Djir"],
        "El Bayadh": ["El Bayadh", "Rogassa", "Bougtoub", "Brezina", "El Abiodh Sidi Cheikh"],
        "Illizi": ["Illizi", "Djanet", "In Amenas", "Bordj Omar Driss", "Debdeb"],
        "Bordj Bou Arréridj": ["Bordj Bou Arréridj", "Ras El Oued", "Bordj Zemoura", "El Achir", "Mansoura"],
        "Boumerdès": ["Boumerdès", "Thenia", "Boudouaou", "Khemis El Khechna", "Naciria"],
        "El Tarf": ["El Tarf", "El Kala", "Bouteldja", "Ben M'Hidi", "Bouhadjar"],
        "Tindouf": ["Tindouf", "Oum El Assel"],
        "Tissemsilt": ["Tissemsilt", "Theniet El Had", "Bordj Bou Naama", "Lardjem", "Ammari"],
        "El Oued": ["El Oued", "Robbah", "Guemar", "Magrane", "Debila"],
        "Khenchela": ["Khenchela", "Kais", "El Hamma", "Bouhmama", "M'Toussa"],
        "Souk Ahras": ["Souk Ahras", "Sedrata", "Hanancha", "Mechroha", "Taoura"],
        "Tipaza": ["Tipaza", "Cherchell", "Hadjout", "Gouraya", "Bou Ismaïl"],
        "Mila": ["Mila", "Tadjenanet", "Chelghoum Laïd", "Grarem Gouga", "Oued Athmania"],
        "Aïn Defla": ["Aïn Defla", "Miliana", "El Abadia", "Khemis Miliana", "Boumedfaa"],
        "Naâma": ["Naâma", "Mecheria", "Aïn Sefra", "Tiout", "Sfissifa"],
        "Aïn Témouchent": ["Aïn Témouchent", "Beni Saf", "El Amria", "Hammam Bou Hadjar", "El Malah"],
        "Ghardaïa": ["Ghardaïa", "Berriane", "Metlili", "El Guerrara", "Zelfana"],
        "Relizane": ["Relizane", "Oued Rhiou", "Ammi Moussa", "Mazouna", "Sidi M'Hamed Ben Ali"]
    };

    const clinics = ["Clinic1", "Clinic2", "Clinic3"];
    const backgroundImages = [
        'C:/Users/ba325/Documents/clinic-search-website/src/Pic/background.jpg',
        'C:/Users/ba325/Documents/clinic-search-website/src/Pic/background2.jpg',
        'C:/Users/ba325/Documents/clinic-search-website/src/Pic/background3.jpg'
    ];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        document.body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    }

    setInterval(changeBackgroundImage, 10000); // Change image every 10 seconds

    wilayas.forEach(wilaya => {
        const option = document.createElement("option");
        option.value = wilaya;
        option.textContent = wilaya;
        wilayaSelect.appendChild(option);
    });

    wilayaSelect.addEventListener("change", function() {
        citySelect.innerHTML = "";
        const selectedWilaya = wilayaSelect.value;
        if (cities[selectedWilaya]) {
            cities[selectedWilaya].forEach(city => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });

    clinicInput.addEventListener("input", function() {
        const input = clinicInput.value.toLowerCase();
        suggestionBox.innerHTML = "";
        if (input) {
            const filteredClinics = clinics.filter(clinic => clinic.toLowerCase().includes(input));
            filteredClinics.forEach(clinic => {
                const suggestionItem = document.createElement("div");
                suggestionItem.textContent = clinic;
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.addEventListener("click", function() {
                    clinicInput.value = clinic;
                    suggestionBox.innerHTML = "";
                });
                suggestionBox.appendChild(suggestionItem);
            });
        }
    });

    //  Previous code u typed
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const wilaya = wilayaSelect.value;
        const city = citySelect.value;
        const clinicName = clinicInput.value;
        const personName = personInput.value;
        const reservationDate = reservationDateInput.value;

        // Create a data object
        const reservationData = {
            wilaya: wilaya,
            city: city,
            clinic_name: clinicName,
            person_name: personName,
            reservation_date: reservationDate
        };

        // Send data to the server using fetch API
        fetch('/reserve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationData)
        })
        .then(response => {
            if (response.ok) {
                // Handle successful response
                console.log('Reservation submitted successfully!');
                alert('Reservation submitted successfully!'); // Optional: Display an alert
                reservationForm.reset(); // Clear the form
            } else {
                // Handle error response
                console.error('Error submitting reservation:', response.status);
                alert('Error submitting reservation. Please try again.'); // Optional: Display an error alert
            }
        })
        .catch(error => {
            // Handle network errors
            console.error('Network error:', error);
            alert('Network error. Please check your connection and try again.'); // Optional: Display an error alert
        });
    });

    supportButton.addEventListener("click", function() {
        alert("Support is on the way!");
    });

    languageButton.addEventListener("click", function() {
        const isEnglish = document.documentElement.lang === "en";
        document.documentElement.lang = isEnglish ? "ar" : "en";
        document.documentElement.dir = isEnglish ? "rtl" : "ltr";
        document.getElementById("header-title").textContent = isEnglish ? "Clinic Reservation" : "Clinic Reservation";
        document.getElementById("wilaya-label").textContent = isEnglish ? "الولاية:" : "Wilaya:";
        document.getElementById("city-label").textContent = isEnglish ? "المدينة:" : "City:";
        document.getElementById("clinic-name-label").textContent = isEnglish ? "اسم العيادة:" : "Name of Clinic:";
        document.getElementById("person-name-label").textContent = isEnglish ? "اسم الشخص:" : "Name of Person:";
        document.getElementById("reservation-date-label").textContent = isEnglish ? "تاريخ الحجز:" : "Reservation Date:";
        document.getElementById("submit-button").textContent = isEnglish ? "احجز" : "Reserve";
        languageButton.textContent = isEnglish ? "English" : "عربي";
    });

    // Initialize the first background image
    document.body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
});