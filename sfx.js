document.addEventListener('DOMContentLoaded', () => {
    const buttonSound = document.getElementById('buttonSound');

    function playSoundAndRedirect(event) {
      event.preventDefault(); // Prevent immediate navigation
      const targetUrl = event.currentTarget.querySelector('a').href;

      buttonSound.currentTime = 0; // Reset sound to start
      buttonSound.play();

      // Delay the navigation to allow the sound to play
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 200); // Adjust the delay time if needed
    }

    document.getElementById('playButton').addEventListener('click', playSoundAndRedirect);
    document.getElementById('leaderboardsButton').addEventListener('click', playSoundAndRedirect);
    document.getElementById('helpButton').addEventListener('click', playSoundAndRedirect);
  });