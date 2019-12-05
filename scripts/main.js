const clickS = new Audio('scripts/../audio/Click2-Seba.mp3')
const winS = new Audio('scripts/../audio/dixie-hornWins.mp3')
let counter = 0

let chWinner = function(){
  //rows
  
    if ($('#b1-1').text() == $('#b1-2').text() && $('#b1-2').text() == $('#b1-3').text() && $('#b1-1').text() != '') {
    setTimeout(function(){
        
        swal('the winner is '+ $('#b1-3').text() )} ,500 , winS.play())
        $('div.row div').off();
        
       
    }
    

    else if ($('#b2-1').text() === $('#b2-2').text() && $('#b2-2').text() === $('#b2-3').text() && $('#b2-1').text() != '') {
        setTimeout(function(){
            
            swal('the winner is '+ $('#b2-3').text() )} ,500 , winS.play())
            $('div.row div').off();
           
            
        }
    

    else if ($('#b3-1').text() === $('#b3-2').text() && $('#b3-2').text() === $('#b3-3').text() && $('#b3-1').text() != '') {
        setTimeout(function(){
            
            swal('the winner is '+ $('#b3-3').text() )} ,500 , winS.play())
            $('div.row div').off();
            
        }
    
  
  //columns
  else if ($('#b1-3').text() === $('#b2-3').text() && $('#b2-3').text() === $('#b3-3').text() && $('#b1-3').text() != '') {
    setTimeout(function(){
        
        swal('the winner is '+ $('#b3-3').text() )} ,500, winS.play())
        $('div.row div').off();
        
    }


        else if ($('#b1-2').text() === $('#b2-2').text() && $('#b2-2').text() === $('#b2-3').text() && $('#b1-2').text() != '') {
            setTimeout(function(){
                
                swal('the winner is '+ $('#b2-3').text() )} ,500, winS.play())
                $('div.row div').off();
                
            }

      

    else if ($('#b1-1').text() === $('#b2-1').text() && $('#b2-1').text() === $('#b3-1').text() && $('#b1-1').text() != '') {
        setTimeout(function(){
            
            swal('the winner is '+ $('#b3-1').text() )} ,500, winS.play())
            $('div.row div').off();
            
        }
        
        
        // crossing

  else if ($('#b1-3').text() === $('#b2-2').text() && $('#b2-2').text() === $('#b3-1').text() && $('#b1-3').text() != '') {
    setTimeout(function(){
        
        swal('the winner is '+ $('#b3-1').text() )} ,500, winS.play())
        $('div.row div').off();
        
    }



    else if ($('#b1-1').text() === $('#b2-2').text() && $('#b2-2').text() === $('#b3-3').text() && $('#b1-1').text() != '') {
        setTimeout(function(){
            
            swal('the winner is '+ $('#b3-3').text() )} ,500, winS.play())
            $('div.row div').off();
        }
        
        else if (counter === 9) {
            setTimeout(function(){
                swal('Tie')} ,500)
                $('div.row div').off();
            }
            

}





$(function(){

    
    $('div.row div').on('click', function(event){
        counter +=1
        if (counter %2 ==0){
        $(event.target).text('X');
        $(event.target).css('background','white');
        $(event.target).css('color','black');
        $(event.target).off();
        clickS.play();
        // chWinnerX();
        chWinner();
        
        }
           
        else {$(event.target).text('O');
        $(event.target).css('background','black');
        $(event.target).css('color','beige');
        $(event.target).off();
        clickS.play();
        
        // chWinnerO();
        // chWinnerX();
        chWinner();
      }
        
    })

    $('.reset').on('click', function(){
        $('div.row div').text('');
        $('div.row div').css('background','beige');
        $('div.row div').css('color','black');

        $('div.row div').on('click', function(event){
            counter +=1
            if (counter %2 ==0){
                $(event.target).text('X');
                $(event.target).css('background','beige');
                $(event.target).css('color','black');
                $(event.target).off();
                clickS.play();
                
                chWinner();
                
                
            }
            else {$(event.target).text('O');
            $(event.target).css('background','black');
            $(event.target).css('color','beige');
            $(event.target).off('');
            clickS.play();
                
                chWinner();
               
                
            }
            
        })
    })











})