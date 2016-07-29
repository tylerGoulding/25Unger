
function initMap() {

    // Create an array of styles.
    var styles = [
        {
            stylers: [
                { color: '#1D394F' },
                { saturation: 30 }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
                { color: '#b8914c' },
            ]
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
                { color: '#eed48a' },
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'lables',
            stylers: [
                { color: '#FFFFFF' },
                { visibility: 'simplified' }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                { color: '#BD9456' },
            ]
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
                {color: '#1D394F'},
            ]
        },
        {
            featureType: 'transit',
            elementType: 'label',
            stylers: [
                {visibility: 'off'},
            ]
        },
        {
            featureType: 'administrative',
            elementType: 'label',
            stylers: [
                {visibility: 'off'},
            ]
        },
        {
            featureType: 'poi',
            elementType: 'label',
            stylers: [
                {visibility: 'off'},
            ]
        },
        {
            featureType: 'poi.school',
            elementType: 'geometry',
            stylers: [
                {visibility: 'on'},
                {color: '#003C69'}
            ]
        },
        {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
                { visibility: 'simplified' }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
//                    disableDefaultUI: true,
        center: new google.maps.LatLng(40.445,-79.936),
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}
//            var styles = [
//                {
//                    featureType: 'road',
//                    elementType: 'geometry',
//                    stylers: [
//                        {hue: '#990000'},
//                        {saturation: 60},
//                        {lightness: -20}
//                    ]
//                }]
//            var styledMap = new google.maps.StyledMapType(styles,
//                    {name: "Styled Map"});
//            function initMap() {
//
//                var mapDiv = document.getElementById('map');
//                var map = new google.maps.Map(mapDiv, {
//                    center: {lat: 40.445, lng: -79.936},
//                    mapTypeId: 'roadmap',
//                    zoom: 15,
//                    scrollwheel: false,
//                    disableDefaultUI: true,
//                    maptypecontrol: false,
//                    mapTypeControlOptions: {
//                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
//                    }
//                });
//            }
//            map.mapTypes.set('map_style', styledMap);
//            map.setMapTypeId('map_style');

