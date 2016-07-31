
!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,n,r){"use strict";e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,t=this;t.on("progress.plugin_gsap",function(){i()}),t.on("destroy.plugin_gsap",function(e){t.removeTween(e.reset)});var i=function(){if(e){var n=t.progress(),r=t.state();e.repeat&&-1===e.repeat()?"DURING"===r&&e.paused()?e.play():"DURING"===r||e.paused()||e.pause():n!=e.progress()&&(0===t.duration()?n>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};t.setTween=function(o,a,s){var u;arguments.length>1&&(arguments.length<3&&(s=a,a=1),o=n.to(o,a,s));try{u=r?new r({smoothChildTiming:!0}).add(o):o,u.pause()}catch(e){return t}return e&&t.removeTween(),e=u,o.repeat&&-1===o.repeat()&&(e.repeat(-1),e.yoyo(o.yoyo())),i(),t},t.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0),t}})});

function initMap() {
    
    // Create an array of styles.
    var styles =
            [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},
                {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},
                {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},
                {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},
                {"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},
                {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},
                {"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},
                {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#00004c"}]},
                {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},
                {"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},
                {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000026"}]},
                {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#b8914c"},{"lightness":16}]},
                {"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},
                {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#b8914c"}]},
                {"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},
                {"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
    //     [
    //     {
    //         stylers: [
    //             { color: '#1D394F' },
    //             { saturation: 30 }
    //         ]
    //     },
    //     {
    //         featureType: 'road.highway',
    //         elementType: 'geometry',
    //         stylers: [
    //             { color: '#b8914c' },
    //         ]
    //     },
    //     {
    //         featureType: 'road.local',
    //         elementType: 'geometry',
    //         stylers: [
    //             { color: '#eed48a' },
    //         ]
    //     },
    //     {
    //         featureType: 'road.arterial',
    //         elementType: 'lables',
    //         stylers: [
    //             { color: '#FFFFFF' },
    //             { visibility: 'simplified' }
    //         ]
    //     },
    //     {
    //         featureType: 'road.arterial',
    //         elementType: 'geometry',
    //         stylers: [
    //             { color: '#BD9456' },
    //         ]
    //     },
    //     {
    //         featureType: 'landscape',
    //         elementType: 'geometry',
    //         stylers: [
    //             {color: '#1D394F'},
    //         ]
    //     },
    //     {
    //         featureType: 'transit',
    //         elementType: 'label',
    //         stylers: [
    //             {visibility: 'off'},
    //         ]
    //     },
    //     {
    //         featureType: 'administrative',
    //         elementType: 'label',
    //         stylers: [
    //             {visibility: 'off'},
    //         ]
    //     },
    //     {
    //         featureType: 'poi',
    //         elementType: 'label',
    //         stylers: [
    //             {visibility: 'off'},
    //         ]
    //     },
    //     {
    //         featureType: 'poi.school',
    //         elementType: 'geometry',
    //         stylers: [
    //             {visibility: 'on'},
    //             {color: '#003C69'}
    //         ]
    //     },
    //     {
    //         featureType: 'road',
    //         elementType: 'labels',
    //         stylers: [
    //             { visibility: 'simplified' }
    //         ]
    //     }
    // ]
        
        ;

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

