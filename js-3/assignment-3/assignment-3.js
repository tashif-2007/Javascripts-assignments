const names_dog = []

for(i=0; i<6; i++){
    names_dog[i] = prompt("Enter the name:");
}

names_dog.sort();
names_dog.reverse();
const list = document.getElementById("target");

for(i=0; i<6; i++){
    let li = document.createElement("li")
    li.textContent = names_dog[i]
    list.append(li);
}