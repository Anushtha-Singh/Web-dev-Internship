const input = document.querySelector('#inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

function updateDisplay(value) {
    input.value = value;
}

arr.forEach(button => {
    console.log("clicked")
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML === "=") {
           try{
            let str = eval(string);
            console.log(str);
            if(str !== 'number'){
                string = "Error" ;
                updateDisplay(string);              
            }
            else {
                string = str;
            }
        }
         catch(error) {
            if(error === "DivisionByZero") {
            string = "Error";
            }
        }
            updateDisplay(string);
        }
        else if(e.target.innerHTML === "CL") {
            string = "";
            updateDisplay(string);
        }
        else if(e.target.innerHTML === "CR") {
            string = string.slice(0, -1);
            updateDisplay(string);
        }
        else {
            string += e.target.innerHTML;
            updateDisplay(string); 
        }
    })    
})
