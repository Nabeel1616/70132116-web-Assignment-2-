function showSelectedOption() {
    let selectedOption = document.getElementById("dropdownMenu").value;
    document.getElementById("selectedOption").textContent = `You selected: ${selectedOption}`;
  }
  