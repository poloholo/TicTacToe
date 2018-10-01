
var PLAYER1 =1;
var PLAYER2 =2;
var playerNo=1;
var score=[0,0];
var gameover=false;
var audio = new Audio('music2.mp3');
var computer = false;
var person1;
var person2;

function entername() {
    // var txt;
    person1 = prompt("Player 1", "enter name");
    person2 = prompt("Player 2 or type 'computer' ", "enter name or computer");

    if(person2 == 'computer') computer = true;

  //  if  ( (person1 == null || person1 == "") && (person2 == null || person2 == "") ) {
  //      txt = "User cancelled the prompt.";
 //   }   
  //  else {
//        txt = person1 + " and "  + person2 + " Let's play!!!";
  //  }
//    document.getElementById("welcome").innerHTML = txt;
//    document.getElementById("score").innerHTML = person1 + " : " + score[0] + "<br>" + person2 + " : " + score[1];
    replay();
    
}



function handleIcon(id){
    
    var played = document.getElementById(id).value; // get pressed button status
    audio.play();
    
    if (!gameover) // game not over yet ...play
        if (played == ''){ // button pressed not played or marked  by any player yet

            if (playerNo == PLAYER1) {
                document.getElementById(id).innerHTML = "X";
                document.getElementById(id).value = PLAYER1;
            } else{
                document.getElementById(id).innerHTML = "O";
                document.getElementById(id).value = PLAYER2;
            }

            var gameresult = check_result(playerNo);
            
            if ( gameresult == "FALSE"){ // no result yet ... keep playing
                
                 if(playerNo== PLAYER2) { // if currently Player 1, then     
                    playerNo = PLAYER1; // ...next player is Player 2
                    document.getElementById("playerprompt").innerHTML= person1 + "- X - your turn";
                    
                }
                else { // if currently Player 1, then  
                    playerNo = PLAYER2; // ...next player is Player 2
                    document.getElementById("playerprompt").innerHTML= person2 + "- O - your turn";

                    if(computer) computerAI();
                } 
                
            } else {// got result ... someone wins or its a draw  

                var winner;
                if(gameresult == "TRUE"){ // someone wins
                    if (playerNo == PLAYER1)
                    winner= person1;
                    else winner= person2;
                    document.getElementById("resultmessage").innerHTML = winner +" WINS!";
                    score[playerNo-1] ++;
                    document.getElementById("score").innerHTML = person1 + " : " + score[0] + "<br>" + person2 + " : " + score[1];
                }
                else // its a draw
                     document.getElementById("resultmessage").innerHTML = "DRAW!";
                 
                gameover = true;
            }          
        }
}


function check_result(playerNo){
    
    var result = "FALSE";
    
    if( (document.getElementById("row11").value == playerNo) &&
        (document.getElementById("row12").value == playerNo) &&
        (document.getElementById("row13").value == playerNo)
    ) {wonbuttons(1);result="TRUE";}
    else
    if( (document.getElementById("row21").value == playerNo) &&
        (document.getElementById("row22").value == playerNo) &&
        (document.getElementById("row23").value == playerNo)
    ) {wonbuttons(2);result="TRUE";}
    else
    if( (document.getElementById("row31").value == playerNo) &&
        (document.getElementById("row32").value == playerNo) &&
        (document.getElementById("row33").value == playerNo)
    ) {wonbuttons(3);result="TRUE";}
    else
    if( (document.getElementById("row11").value == playerNo) &&
        (document.getElementById("row21").value == playerNo) &&
        (document.getElementById("row31").value == playerNo)
    ) {wonbuttons(4);result="TRUE";}
    else
    if( (document.getElementById("row12").value == playerNo) &&
        (document.getElementById("row22").value == playerNo) &&
        (document.getElementById("row32").value == playerNo)
    ) {wonbuttons(5);result="TRUE";}
    else
    if( (document.getElementById("row13").value == playerNo) &&
        (document.getElementById("row23").value == playerNo) &&
        (document.getElementById("row33").value == playerNo)
    ) {wonbuttons(6);result="TRUE";}
    else
    if( (document.getElementById("row11").value == playerNo) &&
        (document.getElementById("row22").value == playerNo) &&
        (document.getElementById("row33").value == playerNo)
    ) {wonbuttons(7);result="TRUE";}
    else
    if( (document.getElementById("row13").value == playerNo) &&
        (document.getElementById("row22").value == playerNo) &&
        (document.getElementById("row31").value == playerNo)
    ) {wonbuttons(8);result="TRUE";}
    else 
        if( document.getElementById("row11").value &&
        document.getElementById("row12").value &&
        document.getElementById("row13").value &&
          document.getElementById("row21").value &&
        document.getElementById("row22").value &&
          document.getElementById("row23").value &&
        document.getElementById("row31").value &&
          document.getElementById("row32").value &&
        document.getElementById("row33").value) result="DRAW";
       
    return result;
    
}

function reset_game(){
    
   score[0] = score[1] = 0;
   
   document.getElementById("score").innerHTML = person1 + " : " + score[0] + "<br>" + person2 + " : " + score[1];
   document.getElementById("resultmessage").innerHTML = "";
   replay();
   
}

    
function replay(){
    playerNo=1;
    clearbutton();
    gameover=false;
    document.getElementById("resultmessage").innerHTML = "";
    document.getElementById("playerprompt").innerHTML= person1 + " - X - your turn";   
} 

function computerAI(){
    
    //Dumb Ai will add more later
   if( document.getElementById("row11").value=="") handleIcon("row11");else
   if( document.getElementById("row12").value=="") handleIcon("row12");else
   if( document.getElementById("row13").value=="") handleIcon("row13");else
   if( document.getElementById("row21").value=="") handleIcon("row21");else
   if( document.getElementById("row22").value=="") handleIcon("row22");else
   if( document.getElementById("row23").value=="") handleIcon("row23");else
   if( document.getElementById("row31").value=="") handleIcon("row31");else
   if( document.getElementById("row32").value=="") handleIcon("row32");else
   if( document.getElementById("row33").value=="") handleIcon("row33");
}



function wonbuttons(setno){
    
    var styletxt;
    
    switch(setno){
        
        case 1:    styletxt = '<style> #row11 {background-color: lightgreen;  }'+
                    '#row12 {background-color: lightgreen;  }' +
                    '#row13 {background-color: lightgreen;  }</style>'; break;
            
        case 2:    styletxt = '<style> #row21 {background-color: lightgreen;  }'+
                    '#row22 {background-color: lightgreen;  }' +
                    '#row23 {background-color: lightgreen;  }</style>'; break;
            
        case 3:    styletxt = '<style> #row31 {background-color: lightgreen;  }'+
                    '#row32 {background-color: lightgreen;  }' +
                    '#row33 {background-color: lightgreen;  }</style>'; break;
            
        case 4:    styletxt = '<style> #row11 {background-color: lightgreen;  }'+
                    '#row21 {background-color: lightgreen;  }' +
                    '#row31 {background-color: lightgreen;  }</style>'; break;
            
        case 5:    styletxt = '<style> #row12 {background-color: lightgreen;  }'+
                    '#row22 {background-color: lightgreen;  }' +
                    '#row32 {background-color: lightgreen;  }</style>'; break;
            
        case 6:    styletxt = '<style> #row13 {background-color: lightgreen;  }'+
                    '#row23 {background-color: lightgreen;  }' +
                    '#row33 {background-color: lightgreen;  }</style>'; break;
            
        case 7:    styletxt = '<style> #row11 {background-color: lightgreen;  }'+
                    '#row22 {background-color: lightgreen;  }' +
                    '#row33 {background-color: lightgreen;  }</style>'; break;
            
        case 8:    styletxt = '<style> #row13 {background-color: lightgreen;  }'+
                    '#row22 {background-color: lightgreen;  }' +
                    '#row31 {background-color: lightgreen;  }</style>'; break;
            
    }      
            
    document.getElementById("buttonstyle").innerHTML = styletxt;
  
}

function clearbutton(){
     
    var  styletxt = '<style> .btn_start{background-color: lightgrey;} </style>';
     
    document.getElementById("buttonstyle").innerHTML = styletxt;
   
    document.getElementById("row11").innerHTML = "";
    document.getElementById("row12").innerHTML = "";
    document.getElementById("row13").innerHTML = "";
    document.getElementById("row21").innerHTML = "";
    document.getElementById("row22").innerHTML = "";
    document.getElementById("row23").innerHTML = "";
    document.getElementById("row31").innerHTML = "";
    document.getElementById("row32").innerHTML = "";
    document.getElementById("row33").innerHTML = "";
    
    
    document.getElementById("row11").value = "";
    document.getElementById("row12").value = "";
    document.getElementById("row13").value = "";
    document.getElementById("row21").value = "";
    document.getElementById("row22").value = "";
    document.getElementById("row23").value = "";
    document.getElementById("row31").value = "";
    document.getElementById("row32").value = "";
    document.getElementById("row33").value = "";
  
}
              
            
    
            