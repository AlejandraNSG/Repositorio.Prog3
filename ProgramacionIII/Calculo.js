//Inicio
let edad = 15;
let promedio;

if (edad < 12) {
  promedio = "Niño";
} else if (edad >= 12 && edad < 18) {
  promedio = "Adolescente";
} else if (edad >= 18 && edad < 60) {
  promedio = "Adulto";
} else {
  promedio = "Adulto Mayor";
}
console.log("El promedio de la edad es: " + promedio); //La salida dependera del valor que contenga la variable "let";en este caso: El promedio de la edad es: Adulto

//Fin
