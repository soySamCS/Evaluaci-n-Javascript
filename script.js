/* 

Evaluación Primer Parcial

    1. Repositorio 

        Crear un nuevo "repo" en github y clonarlo en su carpeta de la materia Desarrollo de Apps. 
  
        - Nombre del Repo: Evaluacion-Javascript
        - Descripción: Este es mi repo para mi ejercicio de evaluación.

    2. Estructura básica

        Dentro el Repositorio local crear dos archivos y enlazarlos:
  
        1. index.html 
        2. script.js

    3. Variables

        3.1 Crear una variable 'nombre' y asignarle un valor de tipo cadena de texto.

        3.2 Crear una variable 'edad' y asignarle un valor de tipo númerico.

        3.3 Crear una variable 'estudiaste' y asignarle un valor de tipo booleano.

    4. Concatenación.

    Concatenando los valores de las variables, mostrar po consola el siguiente mensaje: "Hola, soy Samuel y tengo 23 años"

    5. Condicionales

        5.1 Con los bloques, IF y Else, evaluar la variable "estudiaste" es true

        5.2 Si es "true" mostrar por consola el siguiente mensaje :
        "Sam si estudiaste! Pasarás la materia 😎"  

        5.3 Si es "false" mostrar por consola el siguiente mensaje: "Sam no estudiaste, repobarás la materia 😭"

    6. Prompts

        Hacer que los datos de las variablees "nombre" y "edad" sean ingresados por el usuario.

    7. Alert
        
        Hacer que los mensajes de las condiciones se muestren por consola en lugar de por consola.

    8. Funcionamiento

        Verificar el funcionamiento el código es el adecuado. Al cambair el valor de la variable "Estudiaste", debe mostrar el mensaje u otro.
    8. Git y Github

        Guardar los cambios en un commit con el mensaje: "Listo mi ejercicio" y subir los cambios al repositorio remoto.

    9. Compartir 

         Enviar el enlace a su repositorio por correo.

    10. Sonreir

        Ser felices nos vemos la siguiente sesión.

*/




let nombre;
nombre = prompt("¿Cuál es tu nombre?")
let edad;
edad = prompt("¿Cuál es tu edad?")
let Estudiaste;
Estudiaste = prompt("¿Estudiaste para el examen?")

console.log(nombre);
console.log(edad);
console.log(Estudiaste);

let saludo = `Hola, soy ${nombre} y tengo ${edad} años `
console.log(saludo);

if (Estudiaste === "Si" || Estudiaste === "Yes" || Estudiaste === "yes" || Estudiaste === "si" || Estudiaste === "simon") {
    alert(`${nombre} si estudiaste! Pasarás la materia 😎`);
} else {
    alert(`${nombre} no estudiaste, repobarás la materia 😭`)
}