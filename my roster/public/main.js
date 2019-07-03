$("button").click(function(){
    $("div").empty()
   let team= $("input").val()
   $.get(`/teams/${team}`)
   .then(function(res){
      
       for(let i of res){
           $("body").append(`<div >${i.firstName} ${i.lastName}
           <p>${i.jersey}</p>
           <p><img src='https://nba-players.herokuapp.com/players/${i.lastName}/${i.firstName}'></p>
           <p>${i.pos}</p>
           </div>`)
       
    }
   })
})