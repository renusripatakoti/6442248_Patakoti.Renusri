$(document).ready(function() {
  // Handle click event on register button
  $('#registerBtn').click(function() {
    console.log("Register button clicked");

    // Show event card with fadeIn
    $('#eventCard').fadeIn(600);

    // After 3 seconds, fade out event card
    setTimeout(() => {
      $('#eventCard').fadeOut(600);
    }, 3000);
  });
});
