let chWinnerX = function(){
  //rows
    if ($('#b1-1').text() == "X" && $('#b1-2').text() == "X" && $('#b1-3').text() == "X"){
    
    setTimeout(function(){
        alert('x win')   
    },500)

    }

    else if ($('#b2-1').text() == "X" && $('#b2-2').text() == "X" && $('#b2-3').text() == "X") {
        setTimeout(function(){
            alert('x win')   
        },500)
        }
    else if ($('#b3-1').text() == "X" && $('#b3-2').text() == "X" && $('#b3-3').text() == "X") {
        setTimeout(function(){
            alert('x win')   
        },500)
        }
  
  //columns
        else if ($('#b1-3').text() == "X" && $('#b2-3').text() == "X" && $('#b3-3').text() == "X"){
            setTimeout(function(){
                alert('x win')   
            },500)
         }

    else if ($('#b1-2').text() == "X" && $('#b2-2').text() == "X" && $('#b3-2').text() == "X") {
        setTimeout(function(){
            alert('x win')   
        },500)
        }
    else if ($('#b1-1').text() == "X" && $('#b2-1').text() == "X" && $('#b3-1').text() == "X") {
        setTimeout(function(){
            alert('x win')   
        },500)
        }
 
        
  // crossing
    else if ($('#b1-3').text() == "X" && $('#b2-2').text() == "X" && $('#b3-1').text() == "X") {
        setTimeout(function(){
            alert('x win')   
        },500)
        }
    else if ($('#b1-1').text() == "X" && $('#b2-2').text() == "X" && $('#b3-3').text() == "X") {
        setTimeout(function(){
            alert('x win')   
        },500)
        }


}


let chWinnerO = function(){
    
    //rows
       if ($('#b1-1').text() == "O" && $('#b1-2').text() == "O" && $('#b1-3').text() == "0"){
        setTimeout(function(){
            alert('O win')   
        },500)
     }
   
       else if ($('#b2-1').text() == "O" && $('#b2-2').text() == "O" && $('#b2-3').text() == "O") {
        setTimeout(function(){
            alert('O win')   
        },500)
           }
       else if ($('#b3-1').text() == "O" && $('#b3-2').text() == "O" && $('#b3-3').text() == "O") {
        setTimeout(function(){
            alert('O win')   
        },500)
           }
     
           
  //columns
       else if ($('#b1-3').text() == "O" && $('#b2-3').text() == "O" && $('#b3-3').text() == "O"){
        setTimeout(function(){
            alert('O win')   
            },500)
         }
   
       else if ($('#b1-2').text() == "O" && $('#b2-2').text() == "O" && $('#b3-2').text() == "O") {
        setTimeout(function(){
            alert('O win')   
            },500)
           }
       else if ($('#b1-1').text() == "O" && $('#b2-1').text() == "O" && $('#b3-1').text() == "O") {
        setTimeout(function(){
            alert('O win')   
            },500)
        }
     

    //crossing
       else if ($('#b1-3').text() == "O" && $('#b2-2').text() == "O" && $('#b3-1').text() == "O") {
        setTimeout(function(){
            alert('O win')   
            },500)
        }
        else if ($('#b1-1').text() == "O" && $('#b2-2').text() == "O" && $('#b3-3').text() == "O") {
            setTimeout(function(){
                alert('O win')   
            },500)
       }
    
   
   
}

    // let chTie = function(){
    // if($('#b1-1') !="" && $('#b1-2') !=""&& $('#b1-3') !=""&& $('#b2-1') !=""&& $('#b2-2') !=""&& $('#b2-3') !="" && $('#b3-1') !=""&& $('#b3-2') !=""&& $('#b3-3') !=""){
    //      alert("Tie")
    // }






$(function(){

    let x=0
    $('div.row div').on('click', function(event){
        x +=1
        if (x %2 ==0){
        $(event.target).text('X');
        $(event.target).off('');
        chWinnerX()
        chTie()
        }
           
        else {$(event.target).text('O');
        $(event.target).off('');
        chWinnerO()
        chTie()
    }
        
    })

    $('.reset').on('click', function(){
        $('div.row div').text(' ');
        $('div.row div').on('click', function(event){
            x +=1
            if (x %2 ==0){
                $(event.target).text('X');
                $(event.target).off(' ');
                chWinnerX()
                
            }
            else {$(event.target).text('O');
            $(event.target).off('');
                chWinnerO()
                
            }
            
        })
    })











})