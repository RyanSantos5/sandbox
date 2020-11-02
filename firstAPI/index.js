$(document).ready(function(){
  $('.body-content-3').css({"left":"500px"});
  

  $(".ui-menu-item-wrapper").hover(function() {
  }, function() {
      $('.ui-menu-item-wrapper').css({border:'none'});
  });
// --------------  HOVER ------------------------
  
  $(".get-button").click(function() {
    $.get('https://FirstAPI.ryansantos3.repl.co', function(data){
      console.log(data);
      $('.get').html(data);
    });
  });
  $(".post-button").click(function() {
    $.post( "https://FirstAPI.ryansantos3.repl.co/add", { name: "John", time: "2pm" })
        .done(function( data ) {
          console.log(data)
          $('.post').html(data);
        });
  });

  
});




// var headers1 = {
    //   "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
    //   "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    //   "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    //   "Origin": "http://127.0.0.1:5500/firstAPI/",
    //   "X-Riot-Token": "RGAPI-4cd12696-64df-4995-816a-4c3e35cd8d82"
    // };
    // var settings = {
    //   "async": true,
    //   "type": "GET",
    //   "url": "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/UnitSIx?api_key=RGAPI-4cd12696-64df-4995-816a-4c3e35cd8d82",
    //   "headers": headers1,
    // };
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });