document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Get the form data

    fetch('https://hook.eu2.make.com/i969kf5fdprowfri9k8fgbxcxxwn6892', { // Replace with your webhook URL
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully!');
            // Optionally, handle success (e.g., show a message to the user)
        } else {
            console.error('Error submitting form:', response.statusText);
            // Optionally, handle error
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally, handle network error
    });
});

const year = document.querySelector("#current-year")
year.innerHTML = new Date().getFullYear();