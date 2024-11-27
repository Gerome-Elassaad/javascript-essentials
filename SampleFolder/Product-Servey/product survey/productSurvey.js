function submitFeedback() {
    const username = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const job = document.getElementById('job').value.trim();
    const designation = document.getElementById('designation').value.trim();
    const productType = document.getElementById('productType').value.trim();
    const feedback = document.getElementById('feedbackText').value.trim();

    // Validate inputs
    if (!username || !email || !feedback) {
        alert('Please fill in the required fields: Name, Email, and Feedback.');
        return;
    }

    // Update the user information display
    document.getElementById('userName').textContent = username;
    document.getElementById('userAge').textContent = age || 'N/A';
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userJob').textContent = job || 'N/A';
    document.getElementById('userDesignation').textContent = designation || 'N/A';
    document.getElementById('userProductChoice').textContent = productType || 'N/A';
    document.getElementById('userFeedback').textContent = feedback;

    // Show the user information section
    document.getElementById('userInfo').style.display = 'block';

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('job').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('productType').value = '';
    document.getElementById('feedbackText').value = '';

    // Event Listeners for Form Submission
    document.getElementById('submitBtn').addEventListener('click', submitFeedback);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
        submitFeedback();
        }
}   );



    // Display the thank-you message
    alert('Thank you for your feedback! Your submission has been received.');
}
