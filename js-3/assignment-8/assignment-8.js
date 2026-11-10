function concat(name){
    let result =""

    for(i=0; i<name.length; i++){
        result+=name[i];
    }
    return result;
}

const name =["Johnny", "DeeDee", "Joey", "Marky"];
const result = concat(name);

document.getElementById("target").textContent = result;
