import conversor from './conversor.js';

const kg = 5;
const metros = 10;
const celsius = 25;

const libras = conversor.quilogramaParaLibra(kg);
const pes = conversor.metroParaPe(metros);
const fahrenheit = conversor.celsiusParaFahrenheit(celsius);

console.log(`Quilogramas para Libras: ${kg} kg = ${libras.toFixed(4)} lb`);
console.log(`Metros para Pés: ${metros} m = ${pes.toFixed(4)} ft`);
console.log(`Celsius para Fahrenheit: ${celsius}°C = ${fahrenheit.toFixed(0)}°F`);
