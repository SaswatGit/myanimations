gsap.registerPlugin(ScrollTrigger);
gsap.to("#pin-element .pin", {scrollTrigger: {
    trigger: "#pin-element",
    pin: "#pin-element .pin",
    start: "top top",
    end: "bottom bottom",
}});