num_of_participants = Number(prompt("Enter the number of participants:"))
const names_participant =[]

for(i=0; i<num_of_participants; i++){
    names_participant[i] = prompt("Enter the name of participants: ");    
}

names_participant.sort();

const list = document.getElementById("target");

for(i=0; i < names_participant.length; i++){
    let li = document.createElement("li");
    li.textContent = names_participant[i];
    list.append(li);
}
