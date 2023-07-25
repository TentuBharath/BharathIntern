function convertTocelsius() {
    const celsiusInput = document.getElementById("celsius").value;
    const fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("result").textContent = `${celsiusInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}