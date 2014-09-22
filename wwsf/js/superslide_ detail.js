          $(function() {
            $('#slides').superslides({
              hashchange: true,
              play: 2500,
              inherit_width_from: '.wide-container',
              inherit_height_from: '.wide-container'
            });

            $('#slides').on('mouseenter', function() {
              $(this).superslides('stop');
              console.log('Stopped')
            });
            $('#slides').on('mouseleave', function() {
              $(this).superslides('start');
              console.log('Started')
            });
          });

        function sound_return(){
          var sound_array = ["sound1.mp3", "sound2.mp3"];
          var sound = sound_array[Math.floor(Math.random() * sound_array.length)];
          return sound;
        }

        var audioElement = document.createElement('audio');
        audioElement.addEventListener("load", function() {
            audioElement.play();
            btn.hide();
        }, true);
        audioElement.addEventListener("ended", function() {
            btn.show();
        }, true);


        var btn = $('#sound').click(function(event){
            event.preventDefault();
            audioElement.setAttribute('src', 'sound/'+sound_return());
            audioElement.load();
        });
