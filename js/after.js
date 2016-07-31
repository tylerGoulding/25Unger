$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to('#logo', 1, {
        y: '-30%', autoAlpha: 0, ease:Power0.easeNone
        
    });
    var tweenNav = TweenMax.to('#header', 1, {
        top: '-10px', ease:Power0.easeNone

    });
    var tweenColorNav = TweenMax.to('.light', 1, {
        className: "dark", ease:Power0.easeNone

    });
    // create a scene
    var scene = new ScrollMagic.Scene({triggerElement: "#main", duration: 300, offset: 450})
        .setTween(tween)
        .addIndicators({name: "fade out logo"}) // add indicators (requires plugin)
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({triggerElement: "#second", duration: 450, offset: -100})
        .setTween(tweenNav)
        .addIndicators({name: "attach Nav bar to top"}) // add indicators (requires plugin)
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({triggerElement: "#second", duration: 50, offset: 0})
        .setTween(tweenColorNav)
        .addIndicators({name: "tween to dark"}) // add indicators (requires plugin)
        .addTo(controller);
});