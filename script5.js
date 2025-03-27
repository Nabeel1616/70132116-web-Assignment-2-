function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius} °C is equal to ${fahrenheit} °F`);
  }
  
  function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = (fahrenheit - 32) * 5/9;
    alert(`${fahrenheit} °F is equal to ${celsius} °C`);
  }
  