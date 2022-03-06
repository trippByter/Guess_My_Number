'use strict';

// // Usamos el selector como BEM de CSS.
// // ".textContent" nos da como resultado el 
// // contenido del elemento/etiqueta HTML
// console.log(document.querySelector('.message').textContent);

// // Manipulando el elemento
// document.querySelector('.message').textContent = 'Correct Number !✌';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 33;
// document.querySelector('.score').textContent = 15;

// // La clase ".guess" es del input, para obtener el contenido
// // se usa ".value".
// // Cambiamos el valor del input mediante JS.
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);


// Se genera número aleatorio
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Creamos variable para el 'score'
// No es 'const' porque es mutable
let  score = 20;

// Creamos variable 'highscore'
// No es const porque es mutable
let highscore = 0;

// // SOLO PARA HACER PRUEBAS
// // Corroboramos que sea aleatorio, 
// // cambiando el signo de pregunta por el número
// document.querySelector('.number').textContent = secretNumber;

// Para manipulación/reacción de botones, 
// se requiere de los "events"
// addEventListener - Escuchador de eventos. Espera a que 
// un evento ocurra para ejecutar algo
// addEventListener('evento', 'reacción al evento')
document.querySelector('.check').addEventListener('click', function(){
    // Aquí guardamos el valor ingresado en el input
    const guess =  Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    
    // Bucle q permite cambiar el mensaje
    // Siempre empezar por lo que NO es
    // "Si no hay numero en el input..."
    if(!guess){
        document.querySelector('.message').textContent = '🤷‍♂️ No Number!';
    // "De lo contrario si el número de input es igual al número secreto" 
    
    // Cuando el jugador gana
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '😎 Correct Number!';
        
        // Cambiamos el color de todo el body
        // No es necesario seleccionar la clase, solo el elemento 'body'
        // El color se escribe entre comillas
        document.querySelector('body').style.backgroundColor = '#60b347';

        // El numero adivinado, se hace más grande
        document.querySelector('.number').style.width = '30rem';
        
        // Mostramos el número secreto 
        document.querySelector('.number').textContent = secretNumber;

        // Cuando ganas se establece el número de intento como highscore
        // Si el score es mayor que el highscore
        if(score > highscore){
            // Se asigna el valor del score actual a la 
            // variable highscore antes declarada
            highscore = score;
            // Se reemplaza en el DOM
            document.querySelector('.highscore').textContent = highscore;
        }
    // Cuando el número es más alto
    } else if(guess > secretNumber){
        // Dentro de este bloque, condicionamos el 'score'
        if(score > 1){
            document.querySelector('.message').textContent = '🙄 Too High!';
            // Disminuimos el 'score'
            score --;
            // De inmediato, cambiamos el 'score' en el DOM
            document.querySelector('.score').textContent = score;
        } else {
            //Cambiamos mensaje en el DOM
            document.querySelector('.message').textContent = '😒 You lost!';
            // Cambiamos el score a cero
            document.querySelector('.score').textContent = 0;
        }
    // Cuando el número es más bajo
    } else if(guess < secretNumber){
        // Dentro de este bloque, condicionamos el 'score'
        if(score > 1){
            document.querySelector('.message').textContent = '🙄 Too Low!';
            // Disminuimos el 'score'
            score --;
            // De inmediato, cambiamos el 'score' en el DOM
            document.querySelector('.score').textContent = score;
        } else {
            //Cambiamos mensaje en el DOM
            document.querySelector('.message').textContent = '😒 You lost!';
            // Cambiamos el score a cero
            document.querySelector('.score').textContent = 0;
        }   
    }
});


// Funcionalidad del botón 'Again'
// Este botón debe manipular muchos DOM elements
// Asigna un valor a la variable score, declarada antes
// Asigna valor a la variable secretNumber, declarada antes
// Manipula cinco DOM elements
document.querySelector('.again').addEventListener('click', function(){
    // Devolvemos el valor original a la variable
    score = 20;
    // Se vuelve a generar un número aleatorio
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Se vuelve a colocar 'Start guessing...'
    document.querySelector('.message').textContent = 'Start guessing...';
    // Se vuelve al score original
    document.querySelector('.score').textContent = score;
    // Se vuelve a colocar el ' ? '
    document.querySelector('.number').textContent = '?';
    // Se vuelve al tamaño original del cuadro del numero secreto 
    document.querySelector('.number').style.width = '15rem';
    // Se deja el cuadro de adivinar vacío
    document.querySelector('.guess').value = '';
    // Se vuelve a dejar al body en su color original
    document.querySelector('body').style.backgroundColor = '#222';
    
});
