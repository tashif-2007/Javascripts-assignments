function even(numbers){
    even_array = [];
    for(i=0; i<numbers.length; i++){
        if(numbers[i]%2==0){
            even_array.push(numbers[i]);
        }
    }
    return even_array;
}

all_number = [2, 7, 4];
even_num_array = even(all_number);

console.log(all_number);
console.log(even_num_array);

