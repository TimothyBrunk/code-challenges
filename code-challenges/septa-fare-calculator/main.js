src='jquery-3.1.0.min.js'
$(document).ready(function(){
console.log("LOADED");//Always my first step to make sure the jquery file is linked

// There was still a good amount of work I needed to get to here before I ran out of time.

  $("#fareForm").submit((function(event){ //on #fareForm submission

            event.preventDefault();//prevents the default form submission

            $.ajax({ // working on setting up the ajax call
                    url:'fares.json',
                    type:'GET',
                    data:$(this).serialize(),
                    dataType: 'json',
                    success:function(result){
                      $.each(result, function(index, element){
                        $("#priceResult").append(  //will post result on the #priceResult Div
                          text:element.price
                    }));
            });
        });
      }
});
