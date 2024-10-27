// Event listener on the form submit
document.querySelector("#email-form").addEventListener("submit", function(event){
    // Prevent the default form submission
    event.preventDefault();

    // Get the email input element and its value
    const emailForm = document.querySelector("#email");
    const email = emailForm.value;

    console.log(email);  // Log the email for debugging

    // Make RudderStack Identify Call
    rudderanalytics.track(email, { email: email });

    // Clear the form input
    emailForm.value = "";
});
