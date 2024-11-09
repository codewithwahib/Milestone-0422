// Ensure the form is accessible by its ID
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Event listener for the form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    // Get the values from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume content
    var resumeContent = "\n        <h2>".concat(name, "'s Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume content in the resume-display div
    resumeDisplay.innerHTML = resumeContent;
});
