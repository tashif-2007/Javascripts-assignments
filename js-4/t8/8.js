const operation = document.getElementById('operation');
const start = document.querySelector('#start');
const result = document.querySelector('#result');

start.onclick = () => {
    const num_1 = Number(document.getElementById('num1').value);
    const num_2 = Number(document.getElementById('num2').value);

    switch(operation.value){
        case "add":
            result.textContent = num_1+num_2;
            break;
        
        case "sub":
            result.textContent = num_1-num_2;
            break;
        
        case "multi":
            result.textContent = num_1*num_2;
            break;
        
        case "div":
            result.textContent = num_1/num_2;
            break;
    
    }
}