// Add an event listener to the button with id 'startTest'
document.getElementById('startTest').addEventListener('click', function() {
    // Set the innerHTML of the element with id 'result' to 'Testing...'
    document.getElementById('result').innerHTML = 'Testing...';

    // Use AJAX to send a GET request to the server
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // If the response status is 200, set the innerHTML of the element with id 'result' to 'Your internet speed is: ' + the response text + ' Mbps'
                document.getElementById('result').innerHTML = 'Your internet speed is: ' + xhr.responseText + ' Mbps';
            } else {
                // If the response status is not 200, set the innerHTML of the element with id 'result' to 'Error occurred while testing your internet speed.'
                document.getElementById('result').innerHTML = 'Error occurred while testing your internet speed.';
            }
        }
    };
    xhr.open('GET', 'speedtest', true);
    xhr.send();
});
