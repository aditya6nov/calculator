let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screevalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        // console.log('button text is ',buttonText);
        if(buttonText == 'X'){
            buttonText='*';
            screevalue+=buttonText;
            screen.value=screevalue;
        }else if(buttonText == 'C'){
            screevalue="";
            screen.value=screevalue;
        }else if(buttonText == '='){
            screen.value=eval(screevalue);
        }else{
            screevalue+=buttonText;
            screen.value=screevalue;
        }
    })
}