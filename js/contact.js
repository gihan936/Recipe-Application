// Deep Vekariya || 8905415

$(document).ready(function() {
    // Tooltip functionality on hover for form elements
    $('form input, form select, form textarea').hover(
        function() {
            const title = $(this).attr('title'); // Get the title attribute of the hovered element
            if (title) {
                $('<div class="tooltip"></div>')
                    .text(title) // Set tooltip text
                    .appendTo('body') // Append tooltip to the body
                    .fadeIn('slow'); // Fade in tooltip
            }
        },
        function() {
            $('.tooltip').remove(); // Remove tooltip when not hovering
        }
    ).mousemove(function(e) {
        $('.tooltip').css({
            top: e.pageY + 10, // Position tooltip below cursor
            left: e.pageX + 10 // Position tooltip to the right of cursor
        });
    });

    // Set tooltip titles for form fields
    $('#first-name').attr('title', 'Enter your first name');
    $('#last-name').attr('title', 'Enter your last name');
    $('#email').attr('title', 'Enter a valid email address');
    $('#country').attr('title', 'Start typing to select a country');
    $('#subject').attr('title', 'Select a subject');
    $('#message').attr('title', 'Enter your message');
    $('#attachment').attr('title', 'Choose a file to attach');

    // List of countries for autocomplete
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
        "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
        "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
        "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
        "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
        "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
        "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
        "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
        "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
        "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
        "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    // Initialize autocomplete for the country input field
    $('#country').autocomplete({
        source: countries, // Source of country names
        autoFocus: true // Auto focus on the first suggestion
    });

    // Get form, reset button, and message elements
    const form = document.getElementById('contact-form');
    const resetButton = document.getElementById('reset-button');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    // Function to validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to validate the entire form
    function validateForm() {
        let isValid = true;
        document.querySelectorAll('.error-message').forEach(element => element.textContent = ''); // Clear previous errors

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const country = document.getElementById('country').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        if (!firstName) {
            document.getElementById('first-name-error').textContent = 'First name is required.';
            isValid = false;
        }

        if (!lastName) {
            document.getElementById('last-name-error').textContent = 'Last name is required.';
            isValid = false;
        }

        if (!email || !isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'A valid email is required.';
            isValid = false;
        }

        if (!country) {
            document.getElementById('country-error').textContent = 'Country is required.';
            isValid = false;
        }

        if (!subject) {
            document.getElementById('subject-error').textContent = 'Subject is required.';
            isValid = false;
        }

        if (!message) {
            document.getElementById('message-error').textContent = 'Message is required.';
            isValid = false;
        }

        return isValid;
    }

    // Form submit event handler
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        if (validateForm()) {
            successMessage.style.display = 'block'; // Show success message
            errorMessage.style.display = 'none'; // Hide error message
            form.reset(); // Reset the form fields
        } else {
            successMessage.style.display = 'none'; // Hide success message
            errorMessage.style.display = 'block'; // Show error message
        }
    });

    // Reset button click event handler
    resetButton.addEventListener('click', function() {
        document.querySelectorAll('.error-message').forEach(element => element.textContent = ''); // Clear error messages
        successMessage.style.display = 'none'; // Hide success message
        errorMessage.style.display = 'none'; // Hide error message
    });
});
