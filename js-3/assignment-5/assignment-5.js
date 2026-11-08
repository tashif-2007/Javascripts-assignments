const numbers = [];

while(true){
    let num = Number(prompt("Enter number:"));

    if(numbers.includes(num)){
        alert("The number has already been given.");
        break
    }
    numbers.push(num)
}

numbers.sort((a, b) => a - b);

for(i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
