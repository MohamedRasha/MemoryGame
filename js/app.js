

var deck = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-anchor", "fa-anchor",
"fa-bolt", "fa-bolt", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf",
"fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];
var startGame=false;

var timer = new Timer();
var openedCards=[];
var movesCount=0;
var numStars=3;
var matchedCardsCounts=0;
/* Shuffle The Array To Show random Photoes Each time the game start  */
Array.prototype.Shuffle_Array = function (arr) {
    var temp;
    var rand;
    for (var i = 0; i < this.length; i++) {
        while ((rand = parseInt(Math.random() * this.length)) == i) { }
        temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }

}

function Reset(){
   timer.stop();
   movesCount=0;
   numStars=3;

   $('.timer').text("00:00:00");
   $(".moves").text(String(movesCount));
   $(".num-stars").text(String(numStars));
   $(".card").attr("class", "card");
   resetStars();
   updateCards();
    startGame=false;
}
// Randomizes cards on board and updates card HTML
function updateCards() {
    deck.Shuffle_Array(deck);
    var index = 0;
    $.each($(".card i"), function(){
      $(this).attr("class", "fa " + deck[index]);
      index++;
    });

};
// Restores star icons to 3 stars, updates modal HTML
function resetStars() {
    $(".fa-star-o").attr("class", "fa fa-star");
};

// Checks if card is a valid move (if it not currently matched or open)
function isValid(card) {
    return !(card.hasClass("open") || card.hasClass("match"));
};




function StartTimer(){
    if(startGame){
            timer.start();
          timer.addEventListener('secondsUpdated', function (e) {
            $('.timer').html(timer.getTimeValues().toString());
        });
    }
}
// Sets selected card to the open and shown state
function openCard(card) {

    if (!card.hasClass("open")) {
        card.addClass("open");
        card.addClass("show");
        openedCards.push(card);
    }
};

/*
Start Game by reset time and reset stars and also shuffle cards 
*/
function StartGame(){
    deck.Shuffle_Array(deck);
    var index = 0;
    $.each($(".card i"), function(){
      $(this).attr("class", "fa " + deck[index]);
      index++;
    });
    StartTimer();

}

function IsMatched(){
let result=false;
    if(openedCards[0].children().attr("class")===openedCards[1].children().attr("class")) {
    
        result=true;
        return result;
    }
else{
return result;
}
    }

    function CloseCards(){
        $.each(openedCards, function(){
            $(this).removeClass("show");
            $(this).removeClass("open");
            
          });
          openedCards=[];   
    }

function CardsMatched(){
debugger;
    openedCards.forEach(function(card) {
        card.addClass("match");
    });
    openedCards=[];
    matchedCardsCounts += 2;

    if (matchedCardsCounts==16) {
        timer.stop();

        ShowModal();
    }
}
function ShowModal (){
    
    $("#win-modal").css("display", "block");
timer.stop();
console.log(timer.getTimeValues().toString());
   $('.timer').text(timer.getTimeValues().toString());
}
function IncrementMovesCount(reset){
if(reset){
    movesCount=0;
}
else{
    movesCount++;
    $(".moves").text(String(movesCount));
}
}

function SetLevel(reset){
    if(reset){
        numStars=3;
        $(".fa-star-o").attr("class", "fa fa-star");
        $(".num-stars").text(String(numStars));
    }
    else{
        if(movesCount==27 || movesCount==10){

            $(".fa-star").last().attr("class", "fa fa-star-o");
            numStars--;
            $(".num-stars").text(String(numStars));
    
        }
    }
   
}
var Clicked=function (){
    if(!startGame){
        startGame=true; 
        StartTimer();  
      
       }
    if(isValid($(this) )){
    if(openedCards.length==0){
        openCard($(this));
        }
else{
    if(openedCards.length==1){
        openCard($(this));

        
    SetLevel(false);
        if( IsMatched()){
            setTimeout(CardsMatched,1000)
        

        }
        else{
            IncrementMovesCount(false);
        setTimeout( CloseCards,1000)
  
    }
    }
}

    }
}
$(".card").click(Clicked);
$(".restart").click(Reset);
$(".play-again").click(Reset);
$(StartGame);
