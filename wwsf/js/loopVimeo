          $(document).ready(function() {
              // Enable the API on each Vimeo video
              jQuery('iframe.vimeo').each(function(){
                  Froogaloop(this).addEvent('play', play);
                  Froogaloop(this).addEvent('ready', ready);
              });
              
              // start video loop at random position
              var startVideoIndex = Math.floor(Math.random()*11);
              
              jQuery('iframe#video' + startVideoIndex).each(function(){
                  Froogaloop(this).addEvent('ready', loop_start);
              });
              
              function ready(playerID){
                  console.log("ready:", playerID);
                  
                  Froogaloop(playerID).addEvent('finish', fin); 
              }
              
              function play(playerID){
                  console.log("playing:", playerID);
                  
                  $('#' + playerID).show();
              }
              
              function fin(playerID){
                  console.log("finished:", playerID);
                  
                  var nextPlayerIndex = parseInt(playerID.match(/\d+/), 10) + 1;
                  
                  if (nextPlayerIndex > 10) { nextPlayerIndex = 0; };
                  
                  nextPlayerID = 'video' + nextPlayerIndex;
                  Froogaloop(nextPlayerID).api('play');
                  $('#' + playerID).hide();
              }
              
              function loop_start(playerID){
                  console.log("loop start:", playerID);
                  
                  Froogaloop(playerID).api('play');
              }
          });
