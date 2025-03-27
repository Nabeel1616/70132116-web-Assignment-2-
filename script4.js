function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent = randomNumber;
  }
  