//ejercico 1,función capaz de revertir el orden de los caracteres de un string dado por un usuario
let reverse = (str) =>{
    let len = str.length;
    let newStr = "";
    for(let i = 0; i < len; i++) newStr += str[len - i -1];
    return newStr;;
}

//2 - Construye una función que sea capaz de comprobar si una variable es un array o no lo es.

const EsUnArray = x =>{
    return Array.isArray(x);

}




//ejercicio3 clonar array/

const myArr = ['juan', 'luis', 'pepe'];




const myJSONcopy = JSON.parse(JSON.stringify(myArr));




console.log(myArr);

console.log(myJSONcopy);

//ejercicio4 borrar elementos iguales array//

let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];

let myUniqueArray1 = [...new Set(array1)]; //

console.log(myUniqueArray1);







//ejercicio5 concatenar 2 arrays//

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

Array.prototype.push.apply(array1,array2);


console.log(array1);  //seria [1,2,3,4,5,6]

//6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.

const cleanConcatArr = (x,y) =>{
    if(!x.Array.isArray || !y.Array.isArray) return console.log('No es un array');
    let p = x.concat(y)
    return [...new Set(p)]
}










//7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número
//es primo o no.

const esPrimo = x => {
    if(isNaN(x)) return console.log('no has introducido un número')
    if (x == 0 || x == 1 || x == 4) return false;
    for (let i = 2; i < x / 2; i++) {
    if (x % i == 0) return console.log('el numero no es primo');
    }
    return console.log('el numero es primo');
    } 



//8 - Diseña una función en Javascript de tipo promesa que genere un array con 5 números aleatorios, 
//una vez hecho esto, pedirá un número al usuario mediante prompt y comprobará si el número introducido 
//coincide con uno de los 5 generados aleatoriamente por el array. en caso de coincidir devolverá un 
//resolve, caso contrario reject. El espectro de los números tanto aleatorios como el introducido 
//por el usuario será del 1 al 10. 
let ejemplo = () =>{
    const p = new Promise((resolve, reject) =>{
        let nNum = 5;
        let max = 10;
        let min = 1;
        let arr = [];
        for(let i = 0; i < nNum; i++){
            arr.push(Math.floor(Math.random()*(max - min) + min))
        }
        let num = parseInt(prompt("Introduzca un numero del " + min + "al " + max));
        console.log("num: " + num);
        console.log("arr: " + arr);
        (arr.includes(num)) ? resolve(num):reject(num);
    })
    return p;
}

ejemplo   ().then((num) => console.log("El numero " + num + " se encuentra en el array de números aleatorios."))
.catch((num)=>console.log("El numero " + num + " no está en el array de numeros aleatorios."));