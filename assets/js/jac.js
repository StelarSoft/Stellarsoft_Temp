
let $logo = document.getElementById("logo-scroll");
let $title = $("#title-scoll");
let $planet = $("#planet1");
let $navBar = $("navBar");


window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
   lax.addElements('#title-scroll', {
      scrollY: {
        translateY: [
          ["0", "elCenterY-90"],
          ["-elCenterY+90", 0],
        ]
      }
    });
    lax.addElements('#logo-scroll', {
      scrollY: {
        translateY: [
          ["0", "elOutY"],
          ["0", "elOutY"],
        
        ]
      }
    })
 lax.addElements('#planet1', {
      scrollY: {
        translateY: [
          ["elInY", "elOutY"],
          ["-250", "0"],
        
        ]
      }
    })
      lax.addElements('#navBar', {
      scrollY: {
        translateY: [
          ["screenHeight/6", "screenHeight/6+100"],
          ["0", "-200"],
        
        ]
      }
    })
  }
