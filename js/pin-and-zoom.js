gsap.registerPlugin(ScrollTrigger);
gsap.to("#pin-and-zoom h1", {fontSize: "7rem", scrollTrigger: {
    trigger: "#pin-and-zoom",
    pin: "#pin-and-zoom",
    start: "top top",
    end: () => "+=" + document.querySelector("#pin-and-zoom").offsetHeight,
    scrub: 1,
}});