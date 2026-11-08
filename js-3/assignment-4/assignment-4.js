number = Number(prompt("Enter the number: "));
num_array = [];

while(number!==0){
    num_array.push(number);
    number = Number(prompt("Enter the number: "));
}

num_array.sort((a, b) => a - b);
num_array.reverse();

for(i=0; i<num_array.length; i++){
    console.log(num_array[i]);
}