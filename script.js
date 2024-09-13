function incrementViratScore() {
    const viratScoreElement = document.getElementById("virat-score");
    const rohitScoreElement = document.getElementById("rohit-score");
  
    // Convert the current scores to numbers
    let viratScore = parseInt(viratScoreElement.textContent);
    let rohitScore = parseInt(rohitScoreElement.textContent);
  
    viratScore++;
    viratScoreElement.textContent = viratScore;
  
    updateTopPlayer(viratScore, rohitScore);
  }
  
  function incrementRohitScore() {
    const viratScoreElement = document.getElementById("virat-score");
    const rohitScoreElement = document.getElementById("rohit-score");
  
    // Convert the current scores to numbers
    let viratScore = parseInt(viratScoreElement.textContent);
    let rohitScore = parseInt(rohitScoreElement.textContent);
  
    rohitScore++;
    rohitScoreElement.textContent = rohitScore;
  
    updateTopPlayer(viratScore, rohitScore);
  }
  
//   function updateTopPlayer(viratScore, rohitScore) {
//     const topPlayerNameElement = document.getElementById("top-player-name");
//     const topPlayerScoreElement = document.getElementById("top-player-score");
  
//     if (viratScore >= rohitScore) {
//         const viratImage = document.createElement("img");
//         viratImage.src = "dhoni.jfif";
//       topPlayerNameElement.textContent = "MS Dhoni";
//       topPlayerScoreElement.textContent = viratScore;
//     } else {
//       topPlayerNameElement.textContent = "Rohit Sharma";
//       topPlayerScoreElement.textContent = rohitScore;
//     }
//   }
function updateTopPlayer(viratScore, rohitScore) {
    const topPlayerNameElement = document.getElementById("top-player-name");
    const topPlayerScoreElement = document.getElementById("top-player-score");
  
    if (viratScore >= rohitScore) {
      topPlayerNameElement.textContent = ""; // Clear existing content
      const viratImage = document.createElement("img");
      viratImage.src = "dhoni.jfif"; // Replace with the actual image path
      topPlayerNameElement.appendChild(viratImage);
      topPlayerScoreElement.textContent = viratScore;
    } else {
      topPlayerNameElement.textContent = ""; // Clear existing content
      const rohitImage = document.createElement("img");
      rohitImage.src = "rohit.jfif"; // Replace with the actual image path
      topPlayerNameElement.appendChild(rohitImage);
      topPlayerScoreElement.textContent = rohitScore;
    }
  }
  