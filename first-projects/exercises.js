// Write a function called add7 that takes one number and returns that number + 7.

function add7(number) {
    return number + 7;
}

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(a, b) {
    return a * b;
}


/*Write a function called capitalize that takes a string and returns that string
with only the first letter capitalized.Make sure that it can take strings 
that are lowercase, UPPERCASE or BoTh.*/

function capitalize(word) {
    word = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    console.log(word);
}

console.log(add7(5))
console.log(multiply(4, 5))
capitalize('apeLLIDos')

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(word){
    return word.charAt((word.length - 1))
}

console.log(lastLetter('wendy'))


//Fizz buzz

function fizzbuzz(){

    for (let counter = 1; counter <= 100; counter++) {

        if (counter%3==0 && counter%5==0) {
            console.log('fizz buzz')
        }else if(counter%5==0){
            console.log('buzz')
        }else if(counter%3==0){
            console.log('fizz')
        }else{
            console.log(counter)
        }
        
        
    }

}

fizzbuzz()