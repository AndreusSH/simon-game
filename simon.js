var simonSound = ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"];
count = 0;
strict = false;
error = false;
playing = false;
myArray = [];
simonArray =[];
var array = ["one", "two","three", "four"];
levels =20;


$(document).ready(function() {
   
  $(".start").click(function(){
    if(playing == true){
      
       count = 0;
    count++;
      strict = false;
error = false;
    //console.log(count)
    $(".rectangle").html(count);
      pcSequence();
      
    }
   else{
     
     alert("you need to turn the thing on!!!")
     
   }
    
 
})
  
});
$(".strict").click(function() {
  if (playing == true)
    
  {$(".strict").addClass("coloring");
    count = 0;
    count++;
    myArray = [];
    simonArray = [];
    strict = true;    
    pcSequence();}
  
  else {
    
    alert("you need to turn the thing on!")
    
  }
  })

$(".slider").click(function(){
    
    playing = (playing == false) ? true : false;
    console.log(playing);
     if (playing){
     
      //$(".rectangle").addClass("back");
       $(".rectangle").text("00");
     
   }
    else{
       //$(".rectangle").removeClass("back");
     $(".rectangle").text("");
     } 
    }) 

$(".touch").click(function() {
    id = $(this).attr("id");
     mySequence();
  })

function mySequence(){
  
  //alert("responsive much")
  myArray.push(id);
    //console.log(id);
    effect(id);
  effect(id);
    
    if (!check()){
      
      if(strict) {
         simonArray = [];
        count = 1;
        $(".rectangle").html(count);
      }   
      error = true;   
      alert("error!")
      myArray = [];      
      pcSequence();
    }
    else if(myArray.length == simonArray.length && myArray.length < levels) {
      count++;
      $(".rectangle").html(count);
      myArray = [];
      error = false;
      pcSequence();
    }
    if(myArray.length == levels) {
      alert("you won")
    }    
}



function pcSequence(){
  
   
  
   $(".rectangle").text(count);
   if(!error) {
    randomize();
  }
   if(error && strict) {
     
    randomize();
  }  
  
   
  
  var i = 0;
  var myInterval = setInterval(function() {
    
    id = simonArray[i];
    //console.log(simonArray)
    //console.log(id);
    effect(id);
    i++;
    if(i == simonArray.length) {
      clearInterval(myInterval);
    } 
  }, 1000);  
}
  
function randomize(){
  
  var r = Math.floor(Math.random() * 4);
  simonArray.push(array[r]);
  console.log(simonArray);
   
}

function effect(id){
  
   $("#" + id).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);  
  index = array.indexOf(id);
  //console.log(index);
  var sound = new Audio(simonSound[index]);
  sound.play();
  
}

function check(){
  
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] != simonArray[i]){
      
      return false;
    }
    
  }
  return true;
  
}
