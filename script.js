// Music Player Logic
    const musicPlayer = document.getElementById('musicPlayer');
    const bgMusic = document.getElementById('bgMusic');
    const musicText = document.getElementById('musicText');
    const playIcon = document.getElementById('playIcon');
    let isPlaying = false;

    musicPlayer.addEventListener('click', function() {
      if (!isPlaying) {
        bgMusic.play().then(() => {
          isPlaying = true;
          musicText.innerText = "Pause Music";
          playIcon.innerText = "⏸️";
        }).catch(error => {
          console.log("Playback blocked:", error);
        });
      } else {
        bgMusic.pause();
        isPlaying = false;
        musicText.innerText = "Play Music";
        playIcon.innerText = "🎵";
      }
    });
    
    // REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwuaxJir8ML0VCe-LEHDy2SxWCwOiFinlWRlNmdJS4abibpNTKrv1esqr_jHy5rIAdT/exec";

    const form = document.getElementById('rsvpForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      submitBtn.disabled = true;
      submitBtn.innerText = "Sending...";
      statusMessage.innerText = "";

      const payload = {
        name: document.getElementById('name').value,
        attending: document.getElementById('attending').value,
        noOfAttendees: document.getElementById('noOfAttendees').value
      };

      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS restrictions for Google Apps Script
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        statusMessage.style.color = "green";
        statusMessage.innerText = "Thank you! Your RSVP has been received.";
        form.reset();
      })
      .catch(error => {
        statusMessage.style.color = "red";
        statusMessage.innerText = "Something went wrong. Please try again.";
        console.error('Error:', error);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send RSVP";
      });

        // Automatically load about.html into the placeholder
    fetch('secondpage.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('page2-placeholder').innerHTML = data;
    });
    });
