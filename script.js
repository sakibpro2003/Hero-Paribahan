// Booked seat count
let selectedSeatCount = 0;
let availableSeatCount =8;






function nowclick(id,className){
    console.log(id);
    const bgColor = document.getElementById(id);
    bgColor.style.backgroundColor = '#1DD100';
    selectedSeatCount ++;
    availableSeatCount --;
    const disableBtn = document.getElementsByClassName(className);
        if(selectedSeatCount===4){
            for(let btn of disableBtn){
            
            btn.disabled= true;
            }
        }
        document.getElementById('availableSeat').innerText = availableSeatCount;
        
    

    
    
    
}
    

