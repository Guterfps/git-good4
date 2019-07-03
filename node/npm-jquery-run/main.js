$("div").click(function(){
    $("div").css("color:#f39c12")
})
$.get("http://data.nba.net/10s/prod/v1/2016/players.json",function(r){
    console.log(r)
})