gsap.registerPlugin(ScrollTrigger);
gsap.from("#pin-and-rotate .awe", {rotateZ: 360, scrollTrigger: {
    trigger: "#pin-and-rotate .awe",
    pin: "#pin-and-rotate",
    start: "top center",
    end: () => "+=" + document.querySelector("#pin-and-rotate").offsetHeight,
    scrub: 1,
}});


