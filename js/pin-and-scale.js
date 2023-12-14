gsap.registerPlugin(ScrollTrigger);
gsap.to("#pin-and-scale .middle", {fontSize: "7rem", opacity: 1, scrollTrigger: {
    trigger: "#pin-and-scale",
    pin: "#pin-and-scale",
    start: "top top",
    end: ()=> "+=" + document.getElementById("pin-and-scale").offsetHeight,
    scrub: 1,
}});
gsap.to("#pin-and-scale .top", {scale: "5", x: "-200%", y: "-200%", scrollTrigger: {
    trigger: "#pin-and-scale",
    start: "top top",
    end: ()=> "+=" + document.getElementById("pin-and-scale").offsetHeight,
    scrub: 1,
}});
gsap.to("#pin-and-scale .bottom", {scale: "5", x: "200%", y: "200%", scrollTrigger: {
    trigger: "#pin-and-scale",
    start: "top top",
    end: ()=> "+=" + document.getElementById("pin-and-scale").offsetHeight,
    scrub: 1,
}});