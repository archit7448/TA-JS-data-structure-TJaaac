// 1. Create an array named numbers and store 5 number values in it

let numbers = [2, 45,78,9,6]

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0

function calcSum(){
     for(let number of numbers){
         sum = sum + number
     }console.log(sum)
}

calcSum()

// 3. Calculate the average of array items and print it to the console using console.log()

let average = sum/(numbers.length)

console.log(average)

// 4. Find the highest number in the array and print it to the console using console.log()


function calcMax(){
    let maximum  = Math.max.apply(Math,numbers)
    return console.log(maximum)
}
calcMax()

// 5. Find the lowest number in the array and print it to the console using console.log()

function calcMin(){
    let Min = Math.min.apply(Math,numbers)
    return Math
}

// 6. Find the even numbers in the array and print them to the console using console.log()

function getEven(){
    for(let i = 0 ; i < numbers.length ;i= i+1){
        if(numbers[i] % 2 == 0){
            console.log(numbers[i])
        }
    }
}

getEven()

// 7. Find the odd numbers in the array and print them to the console using console.log()

function getOdd(){
    for(let i = 0 ; i < numbers.length ;i= i+1){
        if(numbers[i] % 2 != 0){
            console.log(numbers[i])
        }
    }
}

getOdd()


// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

function getFive(){
    for(let i = 0 ; i < numbers.length ;i= i+1){
        if(numbers[i] % 5  == 0){
            console.log(numbers[i])
        }
    }
}

getFive()


// 9. Log all the element of the array one by one

function getAll(){
    for(let i = 0 ; i < numbers.length ;i= i+1){
            console.log(numbers[i])
    }
}

getAll()


// 10. Find all the number in the array that is divisible by 3
function getThree(){
    for(let i = 0 ; i < numbers.length ;i= i+1){
        if(numbers[i] % 3 == 0){
            console.log(numbers[i])
        }
    }
}

getThree()
