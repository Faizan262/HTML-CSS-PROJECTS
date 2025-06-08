var grid= document.querySelector(".grid")
var img= document.querySelector(".png")

let direction="normal"

setInterval(()=>{

    direction= direction==="normal "? "reverse ":"normal ";
    img.style.animationDirection= direction
},5000)

























flag=0;
setInterval(() => {

    
    if(flag==0){
    grid.style.gridTemplateAreas = `
     "I1 I1 I2 I2 "
     "I1 I1 I3 I3 "
     "I4 I4 I3 I3 "
     "I6 I5 I7 I8 "
     "I6 I5 I7 I8 "`

     flag=1;
    }

    else{
    grid.style.gridTemplateAreas = `
     "I2 I2 I7 I7 "
     "I2 I2 I6 I6 "
     "I8 I8 I6 I6 "
     "I3 I4 I4 I5 "
     "I3 I1 I1 I5 "`
          
     flag=0;
    }
 

},8000)