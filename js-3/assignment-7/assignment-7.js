function dice(num_dice){
    return Math.floor((Math.random()*num_dice)+1);
}

num_dice = Number(prompt("Enter the no. of side u want:"));
const list = document.getElementById("target");

let result;
do{
    result = dice(num_dice);
    let li = document.createElement("li");
    li.textContent = result;
    list.append(li);

}while(result!==num_dice);