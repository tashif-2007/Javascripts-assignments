function dice(){
    return Math.floor((Math.random()*6)+1);
}

const list = document.getElementById("target");

let result;
do{
    result = dice();
    let li = document.createElement("li");
    li.textContent = result;
    list.append(li);

}while(result!==6);