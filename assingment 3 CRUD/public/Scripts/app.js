/* SPA --> Single Page Application */
/*client side  but express is serer side*/
// IIFE -> immediately invoked function expression
(function(){
    function Start()
    {
        console.log("app started");
    
      let deleteButtons = document.querySelectorAll('.btn-danger');
      for(button of deleteButtons)
      {
          button.addEventListener('click',(event)=>
          {
            if(!confirm("Are you sure?"))
            {
              event.preventDefault();
              window.location.assign('/planner')
            }  
        });
    }
    }
    window.addEventListener("load", Start);


})(); 
