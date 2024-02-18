// Booked seat count
let selectedSeatCount = 0;
const availableSeatCount =8;


function nowclick(id,className){
    console.log(id);
    const bgColor = document.getElementById(id);
    bgColor.style.backgroundColor = '#1DD100';
    selectedSeatCount ++;
    const disableBtn = document.getElementsByClassName(className);
        if(selectedSeatCount===4){
            for(let btn of disableBtn){
            
            btn.disabled= true;
            }
        }

    const getSeatCount = document.getElementById('seatCount');
    getSeatCount.innerText = selectedSeatCount;  
    
    
    // console.log(selectedSeatCount);
    
}
    

