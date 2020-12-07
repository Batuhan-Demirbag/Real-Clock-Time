function realtimeClock() {

  let RealTimearr = new Date();

  let hours = RealTimearr.getHours()
  let minutes = RealTimearr.getMinutes()
  let secounds = RealTimearr.getSeconds()

  // Am  or PM cohese system

  let amPm = (hours < 12) ? "AM" : "PM";
  /* 
      let amPm
         if(hours <12){
  
           return  amPm ="AM"
         }
  
         else{
           return  amPm ="PM"
         
          }
   */
  // 12 - hoursrse format
  hours = (hours > 12) ? hours - 12 : hours;


  //
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  secounds = ("0" + secounds).slice(-2);

  //Display the clock
  document.getElementById('clock').innerHTML =
    hours + "  :  " + minutes + "  :  " + secounds + "  :  " + amPm;

  let t = setTimeout(realtimeClock, 500);

}