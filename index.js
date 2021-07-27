
let length = document.querySelectorAll('.drum').length;
let sound


document.addEventListener('keydown', function(keyPressed){
     soundplay(keyPressed.key)
})

for(let i = 0; i < length; i++){

    
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        soundplay(this.innerHTML)
    })
}


function soundplay(whatever){
     switch(whatever){
          case "w": 
               sound =  new Audio('./sounds/crash.mp3').play()
              break;
          case 'a': 
               sound =  new Audio('./sounds/kick-bass.mp3').play()
               break;
          case 's': 
               sound =  new Audio('./sounds/snare.mp3').play()
               break;
          case 'd': 
               sound =  new Audio('./sounds/tom-1.mp3').play()
               break;
          case 'j': 
               sound =  new Audio('./sounds/tom-2.mp3').play()
               break;            
          case 'k': 
               sound =  new Audio('./sounds/tom-3.mp3').play()
               break; 
          case 'l': 
               sound =  new Audio('./sounds/tom-4.mp3').play()
               break;     
          default:
              console.log(this.innerHTML)
  
      }
}