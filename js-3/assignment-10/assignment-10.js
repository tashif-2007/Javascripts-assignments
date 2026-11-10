let num_candidates = Number(prompt("Enter the number of candidates: "));
let candidates = [];

for(i=0; i<num_candidates; i++){
    let name_candidate = prompt("Enter the name: ");
    candidates.push(
        {
            name: name_candidate, 
            votes: 0
        }
    );
}

console.log(candidates);

let num_voters = Number(prompt("Enter number of voters: "));

for(i=0; i< num_voters; i++){
    let vote_candidate = prompt("Enter the candidate you wanna vote: ");
    
    if(vote_candidate === null || vote_candidate==""){
        continue;
    }

    for(j=0; j<candidates.length; j++){
        if(vote_candidate === candidates[j].name){
            candidates[j].votes += 1;
            break;
        }
    }
}

candidates.sort((a, b) => {
   console.log(a, b);
   return b.votes - a.votes;
});

console.log(
    "The winner is " + candidates[0].name +
    " with " + candidates[0].votes + " votes. "
);

console.log("results:")

for(i=0; i<candidates.length; i++){
    console.log(
        candidates[i].name + ": " +
        candidates[i].votes + " votes "
    );
}