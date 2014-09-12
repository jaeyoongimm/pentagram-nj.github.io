


var map;
var brooklyn = new google.maps.LatLng(16.467694, -42.932149);



var MY_MAPTYPE_ID = 'custom_style';

google.maps.event.addDomListener(window, 'load', initialize);


function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#fff' },
        { visibility: 'on' },
        { gamma: 0.57 },
        { weight: 0.4 },
        { saturation: -100 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    }
  ]; 

  var mapOptions = {
    zoom: 3,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.DEFAULT,
        position: google.maps.ControlPosition.LEFT_BOTTOM
    },
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


  var myLatlng1 = new google.maps.LatLng(43.6606141,-79.3527294);
  var myLatlng2 = new google.maps.LatLng(18.457300, -69.948630);
  var myLatlng3 = new google.maps.LatLng(34.026474, -118.254147);
  var myLatlng4 = new google.maps.LatLng(37.981235,23.7320245);
  var myLatlng5 = new google.maps.LatLng(32.0878802,34.797246);
  var myLatlng6 = new google.maps.LatLng(44.9397075,-93.1060534);
  var myLatlng7 = new google.maps.LatLng(42.4422877,-76.4983749);
  var myLatlng8 = new google.maps.LatLng(17.1490283, -36.6693794,5);
  var myLatlng9 = new google.maps.LatLng(34.0204989,-118.4117325);
  var myLatlng10 = new google.maps.LatLng(45.5601451,-73.7120832);
  var myLatlng11 = new google.maps.LatLng(40.7212149,-73.9970065);
  var myLatlng12 = new google.maps.LatLng(40.6211925,22.9460273,13);


  var iconOne = 'icon-1.png';
  var iconTwo = 'icon-2.png';
  var iconThree = 'icon-3.png';
  var iconFour = 'icon-4.png';
  var iconFive = 'icon-5.png';
  var iconSix = 'icon-6.png';
  var iconSeven = 'icon-7.png';
  var iconEight = 'icon-8.png';
  var iconNine = 'icon-9.png';
  var iconTen = 'icon-10.png';
  var iconEleven = 'icon-11.png';


  var largeOne = 'large1.png';
  var largeTwo = 'large2.png';
  var largeThree = 'large3.png';
  var largeFour = 'large4.png';
  var largeFive = 'large5.png';
  var largeSix = 'large6.png';
  var largeSeven = 'large7.png';
  var largeEight = 'large8.png';
  var largeNine = 'large9.png';
  var largeTen = 'large10.png';
  var largeEleven = 'large11.png';








  var marker_one = new google.maps.Marker({
      position: myLatlng1,
      map: map,
      title:"Hello World!",
      icon: iconOne,
  });


  var marker_two = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      //title:"Hello World!",
      icon: iconTwo,

  });



  var marker_three = new google.maps.Marker({
      position: myLatlng3,
      map: map,
      //title:"Hello World!",
      icon: iconThree
  });
  var marker_four = new google.maps.Marker({
      position: myLatlng4,
      map: map,
      //title:"Hello World!",
      icon: iconFour
  });
  var marker_five = new google.maps.Marker({
      position: myLatlng5,
      map: map,
      //title:"Hello World!",
      icon: iconFive
  });
  var marker_six = new google.maps.Marker({
      position: myLatlng6,
      map: map,
      //title:"Hello World!",
      icon: iconSix
  });
  var marker_seven = new google.maps.Marker({
      position: myLatlng7,
      map: map,
      //title:"Hello World!",
      icon: iconSeven
  });
  var marker_eight = new google.maps.Marker({
      position: myLatlng8,
      map: map,
      //title:"Hello World!",
      icon: iconEight
  });
  var marker_nine = new google.maps.Marker({
      position: myLatlng9,
      map: map,
      //title:"Hello World!",
      icon: iconNine
  });
  var marker_ten = new google.maps.Marker({
      position: myLatlng10,
      map: map,
      //title:"Hello World!",
      icon: iconTen
  });
  var marker_eleven = new google.maps.Marker({
      position: myLatlng11,
      map: map,
      //title:"Hello World!",
      icon: iconEleven
  });

  var marker_six_second = new google.maps.Marker({
      position: myLatlng12,
      map: map,
      //title:"Hello World!",
      icon: iconSix
  });



  marker_one.setAnimation(google.maps.Animation.DROP);
  marker_two.setAnimation(google.maps.Animation.DROP);
  marker_three.setAnimation(google.maps.Animation.DROP);
  marker_four.setAnimation(google.maps.Animation.DROP);
  marker_five.setAnimation(google.maps.Animation.DROP);
  marker_six.setAnimation(google.maps.Animation.DROP);
  marker_seven.setAnimation(google.maps.Animation.DROP);
  marker_eight.setAnimation(google.maps.Animation.DROP);
  marker_nine.setAnimation(google.maps.Animation.DROP);
  marker_ten.setAnimation(google.maps.Animation.DROP);

   marker_eleven.setAnimation(google.maps.Animation.DROP);

google.maps.event.addDomListener(window, "resize", function() {
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center); 
});

//open onclick



/*

   google.maps.event.addListener(marker_two, 'click', function() {
    marker_two.setIcon("large2.png");                                    
    infowindow.open(map);
    });
*/


//marker 1
google.maps.event.addListener(marker_one, 'mouseover', function() {
    marker_one.setIcon(largeOne);
    this.setOptions({zIndex:999+1});

});
google.maps.event.addListener(marker_one, 'mouseout', function() {
    marker_one.setIcon(iconOne);
});
google.maps.event.addListener(marker_one, 'click', function() {
    window.location.href = 'project1.html'
});




//marke 2
google.maps.event.addListener(marker_two, 'mouseover', function() {
    marker_two.setIcon(largeTwo);
    this.setOptions({zIndex:999+1});

});
google.maps.event.addListener(marker_two, 'mouseout', function() {
    marker_two.setIcon(iconTwo);
});
google.maps.event.addListener(marker_two, 'click', function() {
    window.location.href = 'project2.html'
});

//marker 3
google.maps.event.addListener(marker_three, 'mouseover', function() {
    marker_three.setIcon(largeThree);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_three, 'mouseout', function() {
    marker_three.setIcon(iconThree);
});
google.maps.event.addListener(marker_three, 'click', function() {
    window.location.href = 'project3.html'
});

//marker 4
google.maps.event.addListener(marker_four, 'mouseover', function() {
    marker_four.setIcon(largeFour);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_four, 'mouseout', function() {
    marker_four.setIcon(iconFour);
});
google.maps.event.addListener(marker_four, 'click', function() {
    window.location.href = 'project4.html'
});

//marker 5
google.maps.event.addListener(marker_five, 'mouseover', function() {
    marker_five.setIcon(largeFive);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_five, 'mouseout', function() {
    marker_five.setIcon(iconFive);
});
google.maps.event.addListener(marker_five, 'click', function() {
    window.location.href = 'project5.html'
});

//marker 6
google.maps.event.addListener(marker_six, 'mouseover', function() {
    marker_six.setIcon(largeSix);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_six, 'mouseout', function() {
    marker_six.setIcon(iconSix);
});
google.maps.event.addListener(marker_six, 'click', function() {
    window.location.href = 'project6.html'
});

//marker 7
google.maps.event.addListener(marker_seven, 'mouseover', function() {
    marker_seven.setIcon(largeSeven);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_seven, 'mouseout', function() {
    marker_seven.setIcon(iconSeven);
});
google.maps.event.addListener(marker_seven, 'click', function() {
    window.location.href = 'project7.html'
});

//marker 8
google.maps.event.addListener(marker_eight, 'mouseover', function() {
    marker_eight.setIcon(largeEight);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_eight, 'mouseout', function() {
    marker_eight.setIcon(iconEight);
});
google.maps.event.addListener(marker_eight, 'click', function() {
    window.location.href = 'project8.html'
});

//marker 9
google.maps.event.addListener(marker_nine, 'mouseover', function() {
    marker_nine.setIcon(largeNine);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_nine, 'mouseout', function() {
    marker_nine.setIcon(iconNine);
});
google.maps.event.addListener(marker_nine, 'click', function() {
    window.location.href = 'project9.html'
});

//marker 10
google.maps.event.addListener(marker_ten, 'mouseover', function() {
    marker_ten.setIcon(largeTen);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_ten, 'mouseout', function() {
    marker_ten.setIcon(iconTen);
});
google.maps.event.addListener(marker_ten, 'click', function() {
    window.location.href = 'project10.html'
});

//marker 11
google.maps.event.addListener(marker_eleven, 'mouseover', function() {
    marker_eleven.setIcon(largeEleven);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_eleven, 'mouseout', function() {
    marker_eleven.setIcon(iconEleven);
});
google.maps.event.addListener(marker_eleven, 'click', function() {
    window.location.href = 'project11.html'
});

//marker 6_second

google.maps.event.addListener(marker_six_second, 'mouseover', function() {
    marker_six_second.setIcon(largeSix);
    this.setOptions({zIndex:999+1});
});
google.maps.event.addListener(marker_six_second, 'mouseout', function() {
    marker_six_second.setIcon(iconSix);
});
google.maps.event.addListener(marker_six_second, 'click', function() {
    window.location.href = 'project6.html'
});




// Sets Google Map zoom level


 var opt = { minZoom: 3, maxZoom: 9 };
  map.setOptions(opt);





}

  

