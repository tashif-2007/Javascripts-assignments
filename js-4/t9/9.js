const start = document.querySelector('#start');
const result = document.querySelector('#result');

start.onclick = () =>{
numbers_calc = document.querySelector('#calculation').value;

switch(true){
    case numbers_calc.includes("+"):{
        parts = numbers_calc.split("+");
        const num_1 = Number(parts[0]);
        const num_2 = Number(parts[1]);    
        result.textContent = num_1 + num_2;
        break;
    }

    case numbers_calc.includes("-"):{
        parts = numbers_calc.split("-");
        const num_1 = Number(parts[0]);
        const num_2 = Number(parts[1]);    
        result.textContent = num_1 - num_2;
        break;
    }

    case numbers_calc.includes("*"):{
        parts = numbers_calc.split("*");
        const num_1 = Number(parts[0]);
        const num_2 = Number(parts[1]);    
        result.textContent = num_1 * num_2;
        break;
    }
    
    case numbers_calc.includes("/"):{
        parts = numbers_calc.split("/");
        const num_1 = Number(parts[0]);
        const num_2 = Number(parts[1]);    
        result.textContent = num_1 / num_2;
        break;
    }
}
};