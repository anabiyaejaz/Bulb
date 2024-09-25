const bulb = document.querySelector('#bulb')
const butn = document.querySelector('button')

 let apply = 0;

   butn.addEventListener('click', () => {
    if(apply == 0){
        bulb.style.backgroundColor = 'Yellow';
        butn.innerHTML = 'OFF'
    
        apply = 1;
        
    } else {
        bulb.style.backgroundColor = 'transparent'; 
        butn.innerHTML = 'ON'

        apply = 0;
    }

   });
