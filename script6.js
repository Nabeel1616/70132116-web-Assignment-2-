function checkPalindrome() {
    let input = document.getElementById("wordInput").value;
    let normalizedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedInput = normalizedInput.split('').reverse().join('');
    
    if (normalizedInput === reversedInput) {
      document.getElementById("result").textContent = "It's a palindrome!";
    } else {
      document.getElementById("result").textContent = "It's not a palindrome.";
    }
  }
  