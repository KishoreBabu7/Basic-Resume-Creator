document.addEventListener('DOMContentLoaded', function () {
    const fullNameInput = document.getElementById('fullName');
    const mailingAddressInput = document.getElementById('mailingAddress');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const emailAddressInput = document.getElementById('emailAddress');
    const linkedInInput = document.getElementById('linkedin');
    const objectiveInput = document.getElementById('objective');
    const degreeInput = document.getElementById('degree');
    const institutionInput = document.getElementById('institution');
    const locationInput = document.getElementById('location');
    const graduationDateInput = document.getElementById('graduationDate');
    const gpaInput = document.getElementById('gpa');
    // Add other input elements as needed

    const livePreview = document.getElementById('livePreview');

    // Event listener to update live preview
    fullNameInput.addEventListener('input', updatePreview);
    mailingAddressInput.addEventListener('input', updatePreview);
    phoneNumberInput.addEventListener('input', updatePreview);
    emailAddressInput.addEventListener('input', updatePreview);
    linkedInInput.addEventListener('input', updatePreview);
    objectiveInput.addEventListener('input', updatePreview);
    degreeInput.addEventListener('input', updatePreview);
    institutionInput.addEventListener('input', updatePreview);
    locationInput.addEventListener('input', updatePreview);
    graduationDateInput.addEventListener('input', updatePreview);
    gpaInput.addEventListener('input', updatePreview);
    // Add event listeners for other input elements as needed

    function updatePreview() {
        livePreview.innerHTML = `
            <h2>Preview</h2>
            <p><strong>Name:</strong> ${fullNameInput.value}</p>
            <p><strong>Mailing Address:</strong> ${mailingAddressInput.value}</p>
            <p><strong>Phone Number:</strong> ${phoneNumberInput.value}</p>
            <p><strong>Email Address:</strong> ${emailAddressInput.value}</p>
            <p><strong>LinkedIn:</strong> ${linkedInInput.value}</p>
            <p><strong>Objective:</strong> ${objectiveInput.value}</p>
            <p><strong>Degree:</strong> ${degreeInput.value}</p>
            <p><strong>Institution:</strong> ${institutionInput.value}</p>
            <p><strong>Location:</strong> ${locationInput.value}</p>
            <p><strong>Graduation Date:</strong> ${graduationDateInput.value}</p>
            <p><strong>GPA:</strong> ${gpaInput.value}</p>
            <!-- Add other fields here -->
        `;
    }
});
