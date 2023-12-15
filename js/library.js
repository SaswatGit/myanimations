gsap.registerPlugin(ScrollTrigger);
gsap.from("#library p", {scale: 0.1, opacity:0, scrollTrigger: {
    trigger: "#library",
    pin: "#library",
    start: "top top",
    end: ()=> "+=" + document.getElementById("library").offsetHeight,
    scrub: 1,
}});