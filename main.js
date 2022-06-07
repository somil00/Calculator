// javascript for calculator

let input = document.getElementById('display');
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText; 
        if(buttonText == "X"){
            buttontext = '*';
            inputValue += buttonText;
            input.value = inputValue;
        }
        else if (buttonText == 'C'){
            inputValue = "";
            input.value = inputValue;
        }
        else if (buttonText == '='){
           inputValue = eval(screenValue);
        }
        else {
            inputValue += buttonText;
            input.value = inputValue;
        }
    })

}
