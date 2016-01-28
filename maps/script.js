// document.onreadystatechange = function () {
//    if (document.readyState == "complete") {
   //document is ready. Do your stuff here



    var map;
    var event1 = {lat: 49.255691, lng: -123.0566464};
    var event2 = {lat: 49.281456, lng: -123.135627};
    var event3 = {lat: 49.261456, lng: -123.105627};
    var event4 = {lat: 49.248456, lng: -123.115627};
    var event5 = {lat: 49.238456, lng: -123.085627};

    var offerLocalMarker = 'images/offer_local.png';
    var offerNewMarker = 'images/offer_newcomer.png';
    var wantLocalMarker = 'images/want_local.png';
    var wantNewMarker = 'images/want_newcomer.png';
    //
    // var mapLabel = new MapLabel({
    //            text: '',
    //            position: event1,
    //            map: map,
    //            fontSize: '20',
    //            align: 'right'
    //          });


    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.246292, lng:  -123.116226},
        zoom: 13
      });

    var marker1 = new google.maps.Marker({
        position: event1,
        map: map,
        label: '',
        title: 'Event offer from a local',
        icon: offerLocalMarker
      });

    var marker2 = new google.maps.Marker({
        position: event2,
        map: map,
        label: '',
        title: 'Event offer from a newcomer',
        icon: offerNewMarker
      });

    var marker3 = new google.maps.Marker({
        position: event3,
        map: map,
        label: '',
        title: 'Event wanted by a local',
        icon: wantLocalMarker
        });

    var marker4 = new google.maps.Marker({
        position: event4,
        map: map,
        label: '',
        title: 'Event wanted by a newcomer',
        icon: wantNewMarker
      });


    }


  // }
  initMap();
 // }
 $("button.create").click(function () {
       var markerIcon;

       var markerTitle = prompt('Event title?');

       var markerType = prompt('Enter the number for marker type... 1 - Event offer from a local    2 - Event offer from a newcomer    3 - Event wanted by a local     4 - Event wanted by a newcomer')
       if (markerType == 1){markerIcon = offerLocalMarker;}
       if (markerType == 2){markerIcon = offerNewMarker;}
       if (markerType == 3){markerIcon = wantLocalMarker;}
       if (markerType == 4){markerIcon = wantNewMarker;}

       var marker5 = new google.maps.Marker({
        position: event5,
        map: map,
        label: '',
        title: markerTitle,
        icon: markerIcon
      });
     });
