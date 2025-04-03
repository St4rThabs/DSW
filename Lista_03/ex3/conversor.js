function quilogramaParaLibra(kg) {
    return kg * 2.20462;
}

function metroParaPe(metros) {
    return metros * 3.28084;
}

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

export default { 
    quilogramaParaLibra: quilogramaParaLibra,
    metroParaPe: metroParaPe,
    celsiusParaFahrenheit: celsiusParaFahrenheit
};